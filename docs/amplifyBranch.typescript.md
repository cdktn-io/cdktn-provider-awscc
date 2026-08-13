# `amplifyBranch` Submodule <a name="`amplifyBranch` Submodule" id="@cdktn/provider-awscc.amplifyBranch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AmplifyBranch <a name="AmplifyBranch" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch awscc_amplify_branch}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

new amplifyBranch.AmplifyBranch(scope: Construct, id: string, config: AmplifyBranchConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig">AmplifyBranchConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig">putBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables">putEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBasicAuthConfig">resetBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBuildSpec">resetBuildSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetComputeRoleArn">resetComputeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableAutoBuild">resetEnableAutoBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode">resetEnablePerformanceMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview">resetEnablePullRequestPreview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableSkewProtection">resetEnableSkewProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetFramework">resetFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName">resetPullRequestEnvironmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBackend` <a name="putBackend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend"></a>

```typescript
public putBackend(value: AmplifyBranchBackend): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBackend.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---

##### `putBasicAuthConfig` <a name="putBasicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig"></a>

```typescript
public putBasicAuthConfig(value: AmplifyBranchBasicAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putBasicAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---

##### `putEnvironmentVariables` <a name="putEnvironmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables"></a>

```typescript
public putEnvironmentVariables(value: IResolvable | AmplifyBranchEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putEnvironmentVariables.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags"></a>

```typescript
public putTags(value: IResolvable | AmplifyBranchTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>[]

---

##### `resetBackend` <a name="resetBackend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetBasicAuthConfig` <a name="resetBasicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBasicAuthConfig"></a>

```typescript
public resetBasicAuthConfig(): void
```

##### `resetBuildSpec` <a name="resetBuildSpec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetBuildSpec"></a>

```typescript
public resetBuildSpec(): void
```

##### `resetComputeRoleArn` <a name="resetComputeRoleArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetComputeRoleArn"></a>

```typescript
public resetComputeRoleArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableAutoBuild` <a name="resetEnableAutoBuild" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableAutoBuild"></a>

```typescript
public resetEnableAutoBuild(): void
```

##### `resetEnablePerformanceMode` <a name="resetEnablePerformanceMode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePerformanceMode"></a>

```typescript
public resetEnablePerformanceMode(): void
```

##### `resetEnablePullRequestPreview` <a name="resetEnablePullRequestPreview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnablePullRequestPreview"></a>

```typescript
public resetEnablePullRequestPreview(): void
```

##### `resetEnableSkewProtection` <a name="resetEnableSkewProtection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnableSkewProtection"></a>

```typescript
public resetEnableSkewProtection(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetFramework` <a name="resetFramework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetFramework"></a>

```typescript
public resetFramework(): void
```

##### `resetPullRequestEnvironmentName` <a name="resetPullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetPullRequestEnvironmentName"></a>

```typescript
public resetPullRequestEnvironmentName(): void
```

##### `resetStage` <a name="resetStage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetStage"></a>

```typescript
public resetStage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AmplifyBranch resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

amplifyBranch.AmplifyBranch.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

amplifyBranch.AmplifyBranch.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

amplifyBranch.AmplifyBranch.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

amplifyBranch.AmplifyBranch.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AmplifyBranch resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AmplifyBranch to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AmplifyBranch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AmplifyBranch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference">AmplifyBranchBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference">AmplifyBranchBasicAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariables">environmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList">AmplifyBranchEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList">AmplifyBranchTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backendInput">backendInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfigInput">basicAuthConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchNameInput">branchNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpecInput">buildSpecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArnInput">computeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput">enableAutoBuildInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput">enablePerformanceModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput">enablePullRequestPreviewInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtectionInput">enableSkewProtectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.frameworkInput">frameworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput">pullRequestEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchName">branchName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpec">buildSpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArn">computeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtection">enableSkewProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.framework">framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stage">stage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backend"></a>

```typescript
public readonly backend: AmplifyBranchBackendOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference">AmplifyBranchBackendOutputReference</a>

---

##### `basicAuthConfig`<sup>Required</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: AmplifyBranchBasicAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference">AmplifyBranchBasicAuthConfigOutputReference</a>

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: AmplifyBranchEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList">AmplifyBranchEnvironmentVariablesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tags"></a>

```typescript
public readonly tags: AmplifyBranchTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList">AmplifyBranchTagsList</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.backendInput"></a>

```typescript
public readonly backendInput: IResolvable | AmplifyBranchBackend;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---

##### `basicAuthConfigInput`<sup>Optional</sup> <a name="basicAuthConfigInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.basicAuthConfigInput"></a>

```typescript
public readonly basicAuthConfigInput: IResolvable | AmplifyBranchBasicAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---

##### `branchNameInput`<sup>Optional</sup> <a name="branchNameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchNameInput"></a>

```typescript
public readonly branchNameInput: string;
```

- *Type:* string

---

##### `buildSpecInput`<sup>Optional</sup> <a name="buildSpecInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpecInput"></a>

```typescript
public readonly buildSpecInput: string;
```

- *Type:* string

---

##### `computeRoleArnInput`<sup>Optional</sup> <a name="computeRoleArnInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArnInput"></a>

```typescript
public readonly computeRoleArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableAutoBuildInput`<sup>Optional</sup> <a name="enableAutoBuildInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuildInput"></a>

```typescript
public readonly enableAutoBuildInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePerformanceModeInput`<sup>Optional</sup> <a name="enablePerformanceModeInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceModeInput"></a>

```typescript
public readonly enablePerformanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePullRequestPreviewInput`<sup>Optional</sup> <a name="enablePullRequestPreviewInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreviewInput"></a>

```typescript
public readonly enablePullRequestPreviewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSkewProtectionInput`<sup>Optional</sup> <a name="enableSkewProtectionInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtectionInput"></a>

```typescript
public readonly enableSkewProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: IResolvable | AmplifyBranchEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>[]

---

##### `frameworkInput`<sup>Optional</sup> <a name="frameworkInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.frameworkInput"></a>

```typescript
public readonly frameworkInput: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentNameInput`<sup>Optional</sup> <a name="pullRequestEnvironmentNameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentNameInput"></a>

```typescript
public readonly pullRequestEnvironmentNameInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AmplifyBranchTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

---

##### `buildSpec`<sup>Required</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

---

##### `computeRoleArn`<sup>Required</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.computeRoleArn"></a>

```typescript
public readonly computeRoleArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableAutoBuild`<sup>Required</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePerformanceMode`<sup>Required</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePullRequestPreview`<sup>Required</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSkewProtection`<sup>Required</sup> <a name="enableSkewProtection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.enableSkewProtection"></a>

```typescript
public readonly enableSkewProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `framework`<sup>Required</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

---

##### `pullRequestEnvironmentName`<sup>Required</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranch.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AmplifyBranchBackend <a name="AmplifyBranchBackend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

const amplifyBranchBackend: amplifyBranch.AmplifyBranchBackend = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.property.stackArn">stackArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#stack_arn AmplifyBranch#stack_arn}. |

---

##### `stackArn`<sup>Optional</sup> <a name="stackArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend.property.stackArn"></a>

```typescript
public readonly stackArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#stack_arn AmplifyBranch#stack_arn}.

---

### AmplifyBranchBasicAuthConfig <a name="AmplifyBranchBasicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

const amplifyBranchBasicAuthConfig: amplifyBranch.AmplifyBranchBasicAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#password AmplifyBranch#password}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#username AmplifyBranch#username}. |

---

##### `enableBasicAuth`<sup>Optional</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_basic_auth AmplifyBranch#enable_basic_auth}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#password AmplifyBranch#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#username AmplifyBranch#username}.

---

### AmplifyBranchConfig <a name="AmplifyBranchConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

const amplifyBranchConfig: amplifyBranch.AmplifyBranchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.appId">appId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.branchName">branchName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.backend">backend</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.basicAuthConfig">basicAuthConfig</a></code> | <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.buildSpec">buildSpec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.computeRoleArn">computeRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#description AmplifyBranch#description}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild">enableAutoBuild</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode">enablePerformanceMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview">enablePullRequestPreview</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableSkewProtection">enableSkewProtection</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.environmentVariables">environmentVariables</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.framework">framework</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName">pullRequestEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.stage">stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#app_id AmplifyBranch#app_id}.

---

##### `branchName`<sup>Required</sup> <a name="branchName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.branchName"></a>

```typescript
public readonly branchName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#branch_name AmplifyBranch#branch_name}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.backend"></a>

```typescript
public readonly backend: AmplifyBranchBackend;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#backend AmplifyBranch#backend}.

---

##### `basicAuthConfig`<sup>Optional</sup> <a name="basicAuthConfig" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.basicAuthConfig"></a>

```typescript
public readonly basicAuthConfig: AmplifyBranchBasicAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#basic_auth_config AmplifyBranch#basic_auth_config}.

---

##### `buildSpec`<sup>Optional</sup> <a name="buildSpec" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.buildSpec"></a>

```typescript
public readonly buildSpec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#build_spec AmplifyBranch#build_spec}.

---

##### `computeRoleArn`<sup>Optional</sup> <a name="computeRoleArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.computeRoleArn"></a>

```typescript
public readonly computeRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#compute_role_arn AmplifyBranch#compute_role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#description AmplifyBranch#description}.

---

##### `enableAutoBuild`<sup>Optional</sup> <a name="enableAutoBuild" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableAutoBuild"></a>

```typescript
public readonly enableAutoBuild: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_auto_build AmplifyBranch#enable_auto_build}.

---

##### `enablePerformanceMode`<sup>Optional</sup> <a name="enablePerformanceMode" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePerformanceMode"></a>

```typescript
public readonly enablePerformanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_performance_mode AmplifyBranch#enable_performance_mode}.

---

##### `enablePullRequestPreview`<sup>Optional</sup> <a name="enablePullRequestPreview" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enablePullRequestPreview"></a>

```typescript
public readonly enablePullRequestPreview: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}.

---

##### `enableSkewProtection`<sup>Optional</sup> <a name="enableSkewProtection" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.enableSkewProtection"></a>

```typescript
public readonly enableSkewProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#enable_skew_protection AmplifyBranch#enable_skew_protection}.

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: IResolvable | AmplifyBranchEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#environment_variables AmplifyBranch#environment_variables}.

---

##### `framework`<sup>Optional</sup> <a name="framework" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.framework"></a>

```typescript
public readonly framework: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#framework AmplifyBranch#framework}.

---

##### `pullRequestEnvironmentName`<sup>Optional</sup> <a name="pullRequestEnvironmentName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.pullRequestEnvironmentName"></a>

```typescript
public readonly pullRequestEnvironmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#pull_request_environment_name AmplifyBranch#pull_request_environment_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#stage AmplifyBranch#stage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AmplifyBranchTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#tags AmplifyBranch#tags}.

---

### AmplifyBranchEnvironmentVariables <a name="AmplifyBranchEnvironmentVariables" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

const amplifyBranchEnvironmentVariables: amplifyBranch.AmplifyBranchEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#name AmplifyBranch#name}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#value AmplifyBranch#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#name AmplifyBranch#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#value AmplifyBranch#value}.

---

### AmplifyBranchTags <a name="AmplifyBranchTags" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

const amplifyBranchTags: amplifyBranch.AmplifyBranchTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#key AmplifyBranch#key}. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#value AmplifyBranch#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#key AmplifyBranch#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/amplify_branch#value AmplifyBranch#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AmplifyBranchBackendOutputReference <a name="AmplifyBranchBackendOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

new amplifyBranch.AmplifyBranchBackendOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resetStackArn">resetStackArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStackArn` <a name="resetStackArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.resetStackArn"></a>

```typescript
public resetStackArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArnInput">stackArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArn">stackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stackArnInput`<sup>Optional</sup> <a name="stackArnInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArnInput"></a>

```typescript
public readonly stackArnInput: string;
```

- *Type:* string

---

##### `stackArn`<sup>Required</sup> <a name="stackArn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.stackArn"></a>

```typescript
public readonly stackArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackendOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyBranchBackend;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBackend">AmplifyBranchBackend</a>

---


### AmplifyBranchBasicAuthConfigOutputReference <a name="AmplifyBranchBasicAuthConfigOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

new amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetEnableBasicAuth">resetEnableBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableBasicAuth` <a name="resetEnableBasicAuth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetEnableBasicAuth"></a>

```typescript
public resetEnableBasicAuth(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuthInput">enableBasicAuthInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuth">enableBasicAuth</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableBasicAuthInput`<sup>Optional</sup> <a name="enableBasicAuthInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuthInput"></a>

```typescript
public readonly enableBasicAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `enableBasicAuth`<sup>Required</sup> <a name="enableBasicAuth" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.enableBasicAuth"></a>

```typescript
public readonly enableBasicAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyBranchBasicAuthConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchBasicAuthConfig">AmplifyBranchBasicAuthConfig</a>

---


### AmplifyBranchEnvironmentVariablesList <a name="AmplifyBranchEnvironmentVariablesList" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

new amplifyBranch.AmplifyBranchEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): AmplifyBranchEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyBranchEnvironmentVariables[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>[]

---


### AmplifyBranchEnvironmentVariablesOutputReference <a name="AmplifyBranchEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

new amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyBranchEnvironmentVariables;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchEnvironmentVariables">AmplifyBranchEnvironmentVariables</a>

---


### AmplifyBranchTagsList <a name="AmplifyBranchTagsList" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

new amplifyBranch.AmplifyBranchTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get"></a>

```typescript
public get(index: number): AmplifyBranchTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyBranchTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>[]

---


### AmplifyBranchTagsOutputReference <a name="AmplifyBranchTagsOutputReference" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer"></a>

```typescript
import { amplifyBranch } from '@cdktn/provider-awscc'

new amplifyBranch.AmplifyBranchTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AmplifyBranchTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.amplifyBranch.AmplifyBranchTags">AmplifyBranchTags</a>

---



