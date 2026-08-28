# `amplifyApp` Submodule <a name="`amplifyApp` Submodule" id="@cdktn/provider-awscc.amplifyApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyApp <a name="AmplifyApp" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app awscc_amplify_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyApp(scope: Construct, id: string, config: AmplifyAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig">AmplifyAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig">putAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig">putBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig">putCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules">putCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables">putEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig">putJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig">resetAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig">resetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec">resetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig">resetCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn">resetComputeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders">resetCustomHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules">resetCustomRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion">resetEnableBranchAutoDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole">resetIamServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig">resetJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken">resetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAutoBranchCreationConfig` <a name="putAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig"></a>

```typescript
public putAutoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putAutoBranchCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `putBasicAuthConfig` <a name="putBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig"></a>

```typescript
public putBasicAuthConfig(value: AmplifyAppBasicAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---

##### `putCacheConfig` <a name="putCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig"></a>

```typescript
public putCacheConfig(value: AmplifyAppCacheConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---

##### `putCustomRules` <a name="putCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules"></a>

```typescript
public putCustomRules(value: IResolvable | AmplifyAppCustomRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putCustomRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

---

##### `putEnvironmentVariables` <a name="putEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables"></a>

```typescript
public putEnvironmentVariables(value: IResolvable | AmplifyAppEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

---

##### `putJobConfig` <a name="putJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig"></a>

```typescript
public putJobConfig(value: AmplifyAppJobConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putJobConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags"></a>

```typescript
public putTags(value: IResolvable | AmplifyAppTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

---

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetAutoBranchCreationConfig` <a name="resetAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetAutoBranchCreationConfig"></a>

```typescript
public resetAutoBranchCreationConfig(): void
```

##### `resetBasicAuthConfig` <a name="resetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBasicAuthConfig"></a>

```typescript
public resetBasicAuthConfig(): void
```

##### `resetBuildSpec` <a name="resetBuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetBuildSpec"></a>

```typescript
public resetBuildSpec(): void
```

##### `resetCacheConfig` <a name="resetCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCacheConfig"></a>

```typescript
public resetCacheConfig(): void
```

##### `resetComputeRoleArn` <a name="resetComputeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetComputeRoleArn"></a>

```typescript
public resetComputeRoleArn(): void
```

##### `resetCustomHeaders` <a name="resetCustomHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomHeaders"></a>

```typescript
public resetCustomHeaders(): void
```

##### `resetCustomRules` <a name="resetCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetCustomRules"></a>

```typescript
public resetCustomRules(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableBranchAutoDeletion` <a name="resetEnableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnableBranchAutoDeletion"></a>

```typescript
public resetEnableBranchAutoDeletion(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetIamServiceRole` <a name="resetIamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetIamServiceRole"></a>

```typescript
public resetIamServiceRole(): void
```

##### `resetJobConfig` <a name="resetJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetJobConfig"></a>

```typescript
public resetJobConfig(): void
```

##### `resetOauthToken` <a name="resetOauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetOauthToken"></a>

```typescript
public resetOauthToken(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

amplifyApp.AmplifyApp.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

amplifyApp.AmplifyApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

amplifyApp.AmplifyApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

amplifyApp.AmplifyApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AmplifyApp resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AmplifyApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AmplifyApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig">autoBranchCreationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig">cacheConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules">customRules</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain">defaultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig">jobConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput">autoBranchCreationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput">basicAuthConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput">buildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput">cacheConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput">computeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput">customHeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput">customRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput">enableBranchAutoDeletionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput">iamServiceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput">jobConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput">oauthTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec">buildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn">computeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders">customHeaders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion">enableBranchAutoDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole">iamServiceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken">oauthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `appName`<sup>Required</sup> <a name="appName" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoBranchCreationConfig`<sup>Required</sup> <a name="autoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfig"></a>

```typescript
public readonly autoBranchCreationConfig: AmplifyAppAutoBranchCreationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference">AmplifyAppAutoBranchCreationConfigOutputReference</a>

---

##### `basicAuthConfig`<sup>Required</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: AmplifyAppBasicAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference">AmplifyAppBasicAuthConfigOutputReference</a>

---

##### `cacheConfig`<sup>Required</sup> <a name="cacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfig"></a>

```typescript
public readonly cacheConfig: AmplifyAppCacheConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference">AmplifyAppCacheConfigOutputReference</a>

---

##### `customRules`<sup>Required</sup> <a name="customRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRules"></a>

```typescript
public readonly customRules: AmplifyAppCustomRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList">AmplifyAppCustomRulesList</a>

---

##### `defaultDomain`<sup>Required</sup> <a name="defaultDomain" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.defaultDomain"></a>

```typescript
public readonly defaultDomain: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: AmplifyAppEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList">AmplifyAppEnvironmentVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobConfig`<sup>Required</sup> <a name="jobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfig"></a>

```typescript
public readonly jobConfig: AmplifyAppJobConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference">AmplifyAppJobConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tags"></a>

```typescript
public readonly tags: AmplifyAppTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList">AmplifyAppTagsList</a>

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `autoBranchCreationConfigInput`<sup>Optional</sup> <a name="autoBranchCreationConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.autoBranchCreationConfigInput"></a>

```typescript
public readonly autoBranchCreationConfigInput: IResolvable | AmplifyAppAutoBranchCreationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---

##### `basicAuthConfigInput`<sup>Optional</sup> <a name="basicAuthConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.basicAuthConfigInput"></a>

```typescript
public readonly basicAuthConfigInput: IResolvable | AmplifyAppBasicAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---

##### `buildSpecInput`<sup>Optional</sup> <a name="buildSpecInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpecInput"></a>

```typescript
public readonly buildSpecInput: string;
```

- *Type:* string

---

##### `cacheConfigInput`<sup>Optional</sup> <a name="cacheConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.cacheConfigInput"></a>

```typescript
public readonly cacheConfigInput: IResolvable | AmplifyAppCacheConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---

##### `computeRoleArnInput`<sup>Optional</sup> <a name="computeRoleArnInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArnInput"></a>

```typescript
public readonly computeRoleArnInput: string;
```

- *Type:* string

---

##### `customHeadersInput`<sup>Optional</sup> <a name="customHeadersInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeadersInput"></a>

```typescript
public readonly customHeadersInput: string;
```

- *Type:* string

---

##### `customRulesInput`<sup>Optional</sup> <a name="customRulesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customRulesInput"></a>

```typescript
public readonly customRulesInput: IResolvable | AmplifyAppCustomRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableBranchAutoDeletionInput`<sup>Optional</sup> <a name="enableBranchAutoDeletionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletionInput"></a>

```typescript
public readonly enableBranchAutoDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: IResolvable | AmplifyAppEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

---

##### `iamServiceRoleInput`<sup>Optional</sup> <a name="iamServiceRoleInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRoleInput"></a>

```typescript
public readonly iamServiceRoleInput: string;
```

- *Type:* string

---

##### `jobConfigInput`<sup>Optional</sup> <a name="jobConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.jobConfigInput"></a>

```typescript
public readonly jobConfigInput: IResolvable | AmplifyAppJobConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="oauthTokenInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthTokenInput"></a>

```typescript
public readonly oauthTokenInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AmplifyAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

---

##### `computeRoleArn`<sup>Required</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.computeRoleArn"></a>

```typescript
public readonly computeRoleArn: string;
```

- *Type:* string

---

##### `customHeaders`<sup>Required</sup> <a name="customHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.customHeaders"></a>

```typescript
public readonly customHeaders: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableBranchAutoDeletion`<sup>Required</sup> <a name="enableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.enableBranchAutoDeletion"></a>

```typescript
public readonly enableBranchAutoDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `iamServiceRole`<sup>Required</sup> <a name="iamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.iamServiceRole"></a>

```typescript
public readonly iamServiceRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthToken`<sup>Required</sup> <a name="oauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.amplifyApp.AmplifyApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyAppAutoBranchCreationConfig <a name="AmplifyAppAutoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppAutoBranchCreationConfig: amplifyApp.AmplifyAppAutoBranchCreationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns">autoBranchCreationPatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec">buildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation">enableAutoBranchCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables">environmentVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework">framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#framework AmplifyApp#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#stage AmplifyApp#stage}. |

---

##### `autoBranchCreationPatterns`<sup>Optional</sup> <a name="autoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.autoBranchCreationPatterns"></a>

```typescript
public readonly autoBranchCreationPatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}.

---

##### `basicAuthConfig`<sup>Optional</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: AmplifyAppAutoBranchCreationConfigBasicAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `enableAutoBranchCreation`<sup>Optional</sup> <a name="enableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBranchCreation"></a>

```typescript
public readonly enableAutoBranchCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_auto_build AmplifyApp#enable_auto_build}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_performance_mode AmplifyApp#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: IResolvable | AmplifyAppAutoBranchCreationConfigEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#framework AmplifyApp#framework}.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#pull_request_environment_name AmplifyApp#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#stage AmplifyApp#stage}.

---

### AmplifyAppAutoBranchCreationConfigBasicAuthConfig <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppAutoBranchCreationConfigBasicAuthConfig: amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppAutoBranchCreationConfigEnvironmentVariables <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppAutoBranchCreationConfigEnvironmentVariables: amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppBasicAuthConfig <a name="AmplifyAppBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppBasicAuthConfig: amplifyApp.AmplifyAppBasicAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#password AmplifyApp#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#username AmplifyApp#username}. |

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_basic_auth AmplifyApp#enable_basic_auth}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#password AmplifyApp#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#username AmplifyApp#username}.

---

### AmplifyAppCacheConfig <a name="AmplifyAppCacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppCacheConfig: amplifyApp.AmplifyAppCacheConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#type AmplifyApp#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#type AmplifyApp#type}.

---

### AmplifyAppConfig <a name="AmplifyAppConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppConfig: amplifyApp.AmplifyAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig">autoBranchCreationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec">buildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig">cacheConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn">computeRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders">customHeaders</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules">customRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#description AmplifyApp#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion">enableBranchAutoDeletion</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables">environmentVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole">iamServiceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig">jobConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken">oauthToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#platform AmplifyApp#platform}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#repository AmplifyApp#repository}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#tags AmplifyApp#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#access_token AmplifyApp#access_token}.

---

##### `autoBranchCreationConfig`<sup>Optional</sup> <a name="autoBranchCreationConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.autoBranchCreationConfig"></a>

```typescript
public readonly autoBranchCreationConfig: AmplifyAppAutoBranchCreationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}.

---

##### `basicAuthConfig`<sup>Optional</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: AmplifyAppBasicAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#basic_auth_config AmplifyApp#basic_auth_config}.

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#build_spec AmplifyApp#build_spec}.

---

##### `cacheConfig`<sup>Optional</sup> <a name="cacheConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.cacheConfig"></a>

```typescript
public readonly cacheConfig: AmplifyAppCacheConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#cache_config AmplifyApp#cache_config}.

---

##### `computeRoleArn`<sup>Optional</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.computeRoleArn"></a>

```typescript
public readonly computeRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#compute_role_arn AmplifyApp#compute_role_arn}.

---

##### `customHeaders`<sup>Optional</sup> <a name="customHeaders" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customHeaders"></a>

```typescript
public readonly customHeaders: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#custom_headers AmplifyApp#custom_headers}.

---

##### `customRules`<sup>Optional</sup> <a name="customRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.customRules"></a>

```typescript
public readonly customRules: IResolvable | AmplifyAppCustomRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#custom_rules AmplifyApp#custom_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#description AmplifyApp#description}.

---

##### `enableBranchAutoDeletion`<sup>Optional</sup> <a name="enableBranchAutoDeletion" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.enableBranchAutoDeletion"></a>

```typescript
public readonly enableBranchAutoDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: IResolvable | AmplifyAppEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#environment_variables AmplifyApp#environment_variables}.

---

##### `iamServiceRole`<sup>Optional</sup> <a name="iamServiceRole" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.iamServiceRole"></a>

```typescript
public readonly iamServiceRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#iam_service_role AmplifyApp#iam_service_role}.

---

##### `jobConfig`<sup>Optional</sup> <a name="jobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.jobConfig"></a>

```typescript
public readonly jobConfig: AmplifyAppJobConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#job_config AmplifyApp#job_config}.

---

##### `oauthToken`<sup>Optional</sup> <a name="oauthToken" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.oauthToken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#oauth_token AmplifyApp#oauth_token}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#platform AmplifyApp#platform}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#repository AmplifyApp#repository}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AmplifyAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#tags AmplifyApp#tags}.

---

### AmplifyAppCustomRules <a name="AmplifyAppCustomRules" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppCustomRules: amplifyApp.AmplifyAppCustomRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#condition AmplifyApp#condition}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#source AmplifyApp#source}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#status AmplifyApp#status}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#target AmplifyApp#target}. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#condition AmplifyApp#condition}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#source AmplifyApp#source}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#status AmplifyApp#status}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#target AmplifyApp#target}.

---

### AmplifyAppEnvironmentVariables <a name="AmplifyAppEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppEnvironmentVariables: amplifyApp.AmplifyAppEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#name AmplifyApp#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#name AmplifyApp#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

### AmplifyAppJobConfig <a name="AmplifyAppJobConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppJobConfig: amplifyApp.AmplifyAppJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType">buildComputeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}. |

---

##### `buildComputeType`<sup>Optional</sup> <a name="buildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig.property.buildComputeType"></a>

```typescript
public readonly buildComputeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#build_compute_type AmplifyApp#build_compute_type}.

---

### AmplifyAppTags <a name="AmplifyAppTags" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

const amplifyAppTags: amplifyApp.AmplifyAppTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#key AmplifyApp#key}. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#value AmplifyApp#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#key AmplifyApp#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/amplify_app#value AmplifyApp#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```typescript
public resetEnableBasicAuth(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```typescript
public readonly enableBasicAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppAutoBranchCreationConfigBasicAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppAutoBranchCreationConfigEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

---


### AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference <a name="AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppAutoBranchCreationConfigEnvironmentVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>

---


### AmplifyAppAutoBranchCreationConfigOutputReference <a name="AmplifyAppAutoBranchCreationConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig">putBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables">putEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns">resetAutoBranchCreationPatterns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig">resetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec">resetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation">resetEnableAutoBranchCreation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild">resetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode">resetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview">resetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName">resetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage">resetStage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuthConfig` <a name="putBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig"></a>

```typescript
public putBasicAuthConfig(value: AmplifyAppAutoBranchCreationConfigBasicAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---

##### `putEnvironmentVariables` <a name="putEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables"></a>

```typescript
public putEnvironmentVariables(value: IResolvable | AmplifyAppAutoBranchCreationConfigEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

---

##### `resetAutoBranchCreationPatterns` <a name="resetAutoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetAutoBranchCreationPatterns"></a>

```typescript
public resetAutoBranchCreationPatterns(): void
```

##### `resetBasicAuthConfig` <a name="resetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBasicAuthConfig"></a>

```typescript
public resetBasicAuthConfig(): void
```

##### `resetBuildSpec` <a name="resetBuildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetBuildSpec"></a>

```typescript
public resetBuildSpec(): void
```

##### `resetEnableAutoBranchCreation` <a name="resetEnableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBranchCreation"></a>

```typescript
public resetEnableAutoBranchCreation(): void
```

##### `resetEnableAutoBuild` <a name="resetEnableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnableAutoBuild"></a>

```typescript
public resetEnableAutoBuild(): void
```

##### `resetEnablePerformanceMode` <a name="resetEnablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePerformanceMode"></a>

```typescript
public resetEnablePerformanceMode(): void
```

##### `resetEnablePullRequestPreview` <a name="resetEnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnablePullRequestPreview"></a>

```typescript
public resetEnablePullRequestPreview(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetFramework` <a name="resetFramework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetFramework"></a>

```typescript
public resetFramework(): void
```

##### `resetPullRequestEnvironmentName` <a name="resetPullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetPullRequestEnvironmentName"></a>

```typescript
public resetPullRequestEnvironmentName(): void
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.resetStage"></a>

```typescript
public resetStage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput">autoBranchCreationPatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput">basicAuthConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput">buildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput">enableAutoBranchCreationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput">enableAutoBuildInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput">enablePerformanceModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput">enablePullRequestPreviewInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput">pullRequestEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns">autoBranchCreationPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec">buildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation">enableAutoBranchCreation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage">stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuthConfig`<sup>Required</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference">AmplifyAppAutoBranchCreationConfigBasicAuthConfigOutputReference</a>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList">AmplifyAppAutoBranchCreationConfigEnvironmentVariablesList</a>

---

##### `autoBranchCreationPatternsInput`<sup>Optional</sup> <a name="autoBranchCreationPatternsInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatternsInput"></a>

```typescript
public readonly autoBranchCreationPatternsInput: string[];
```

- *Type:* string[]

---

##### `basicAuthConfigInput`<sup>Optional</sup> <a name="basicAuthConfigInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.basicAuthConfigInput"></a>

```typescript
public readonly basicAuthConfigInput: IResolvable | AmplifyAppAutoBranchCreationConfigBasicAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigBasicAuthConfig">AmplifyAppAutoBranchCreationConfigBasicAuthConfig</a>

---

##### `buildSpecInput`<sup>Optional</sup> <a name="buildSpecInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpecInput"></a>

```typescript
public readonly buildSpecInput: string;
```

- *Type:* string

---

##### `enableAutoBranchCreationInput`<sup>Optional</sup> <a name="enableAutoBranchCreationInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreationInput"></a>

```typescript
public readonly enableAutoBranchCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAutoBuildInput`<sup>Optional</sup> <a name="enableAutoBuildInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuildInput"></a>

```typescript
public readonly enableAutoBuildInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePerformanceModeInput`<sup>Optional</sup> <a name="enablePerformanceModeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceModeInput"></a>

```typescript
public readonly enablePerformanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePullRequestPreviewInput`<sup>Optional</sup> <a name="enablePullRequestPreviewInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreviewInput"></a>

```typescript
public readonly enablePullRequestPreviewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: IResolvable | AmplifyAppAutoBranchCreationConfigEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigEnvironmentVariables">AmplifyAppAutoBranchCreationConfigEnvironmentVariables</a>[]

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="pullRequestEnvironmentNameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentNameInput"></a>

```typescript
public readonly pullRequestEnvironmentNameInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `autoBranchCreationPatterns`<sup>Required</sup> <a name="autoBranchCreationPatterns" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.autoBranchCreationPatterns"></a>

```typescript
public readonly autoBranchCreationPatterns: string[];
```

- *Type:* string[]

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

---

##### `enableAutoBranchCreation`<sup>Required</sup> <a name="enableAutoBranchCreation" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBranchCreation"></a>

```typescript
public readonly enableAutoBranchCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAutoBuild`<sup>Required</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppAutoBranchCreationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppAutoBranchCreationConfig">AmplifyAppAutoBranchCreationConfig</a>

---


### AmplifyAppBasicAuthConfigOutputReference <a name="AmplifyAppBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppBasicAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```typescript
public resetEnableBasicAuth(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```typescript
public readonly enableBasicAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppBasicAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppBasicAuthConfig">AmplifyAppBasicAuthConfig</a>

---


### AmplifyAppCacheConfigOutputReference <a name="AmplifyAppCacheConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppCacheConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppCacheConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCacheConfig">AmplifyAppCacheConfig</a>

---


### AmplifyAppCustomRulesList <a name="AmplifyAppCustomRulesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppCustomRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get"></a>

```typescript
public get(index: number): AmplifyAppCustomRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppCustomRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>[]

---


### AmplifyAppCustomRulesOutputReference <a name="AmplifyAppCustomRulesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppCustomRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppCustomRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppCustomRules">AmplifyAppCustomRules</a>

---


### AmplifyAppEnvironmentVariablesList <a name="AmplifyAppEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): AmplifyAppEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>[]

---


### AmplifyAppEnvironmentVariablesOutputReference <a name="AmplifyAppEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppEnvironmentVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppEnvironmentVariables">AmplifyAppEnvironmentVariables</a>

---


### AmplifyAppJobConfigOutputReference <a name="AmplifyAppJobConfigOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppJobConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType">resetBuildComputeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuildComputeType` <a name="resetBuildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.resetBuildComputeType"></a>

```typescript
public resetBuildComputeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput">buildComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType">buildComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `buildComputeTypeInput`<sup>Optional</sup> <a name="buildComputeTypeInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeTypeInput"></a>

```typescript
public readonly buildComputeTypeInput: string;
```

- *Type:* string

---

##### `buildComputeType`<sup>Required</sup> <a name="buildComputeType" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.buildComputeType"></a>

```typescript
public readonly buildComputeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppJobConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppJobConfig">AmplifyAppJobConfig</a>

---


### AmplifyAppTagsList <a name="AmplifyAppTagsList" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get"></a>

```typescript
public get(index: number): AmplifyAppTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>[]

---


### AmplifyAppTagsOutputReference <a name="AmplifyAppTagsOutputReference" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer"></a>

```typescript
import { amplifyApp } from '@cdktn/provider-awscc'

new amplifyApp.AmplifyAppTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyApp.AmplifyAppTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyAppTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyApp.AmplifyAppTags">AmplifyAppTags</a>

---



