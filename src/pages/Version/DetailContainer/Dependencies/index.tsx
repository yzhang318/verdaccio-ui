import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import Card from 'verdaccio-ui/components/Card';
import CardContent from 'verdaccio-ui/components/CardContent';
import Chip from 'verdaccio-ui/components/Chip';
import Text from 'verdaccio-ui/components/Text';
import { Theme } from 'verdaccio-ui/design-tokens/theme';

import { PackageDependencies } from '../../../../../types/packageMeta';
import { DetailContext } from '../../context';
import NoItems from '../NoItems';

interface Props {
  title: string;
  dependencies: PackageDependencies;
}

const DependencyBlock = ({ title, dependencies }: Props) => {
  const { enableLoading } = useContext(DetailContext);
  const history = useHistory();
  const { t } = useTranslation();

  const deps = Object.entries(dependencies);

  function handleClick(name: string): void {
    enableLoading?.();

    history.push(`/-/web/detail/${name}`);
  }

  return (
    <CardWrap>
      <CardContent>
        <StyledText variant="subtitle1">{`${title} (${deps.length})`}</StyledText>
        <Tags>
          {deps.map(([name, version]) => (
            <Tag
              className={'dep-tag'}
              clickable={true}
              key={name}
              label={t('dependencies.dependency-block', { package: name, version })}
              // eslint-disable-next-line
              onClick={() => handleClick(name)}
            />
          ))}
        </Tags>
      </CardContent>
    </CardWrap>
  );
};

function hasKeys(object?: { [key: string]: any }): boolean {
  return !!object && Object.keys(object).length > 0;
}

const Dependencies = () => {
  const { packageMeta } = useContext(DetailContext);
  const { t } = useTranslation();

  if (!packageMeta) {
    throw new Error(t('error.package-meta-is-required-at-detail-context'));
  }

  const { latest } = packageMeta;
  // FIXME: add dependencies to package meta type
  // @ts-ignore
  const { dependencies, devDependencies, peerDependencies, name } = latest;
  const dependencyMap = { dependencies, devDependencies, peerDependencies };
  const hasDependencies = hasKeys(dependencies) || hasKeys(devDependencies) || hasKeys(peerDependencies);

  if (hasDependencies) {
    return (
      <>
        {Object.entries(dependencyMap).map(([dependencyType, dependencies]) => {
          if (!dependencies || Object.keys(dependencies).length === 0) {
            return null;
          }

          return <DependencyBlock dependencies={dependencies} key={dependencyType} title={dependencyType} />;
        })}
      </>
    );
  }

  return <NoItems className="no-dependencies" text={t('dependencies.has-no-dependencies', { package: name })} />;
};

export default Dependencies;

const CardWrap = styled(Card)({
  margin: '0 0 16px',
});

const StyledText = styled(Text)<{ theme?: Theme }>(props => ({
  fontWeight: props.theme && props.theme.fontWeight.bold,
  textTransform: 'capitalize',
}));

const Tags = styled('div')({
  display: 'flex',
  justifyContent: 'start',
  flexWrap: 'wrap',
  margin: '0 -5px',
});

const Tag = styled(Chip)({
  margin: '5px',
});
