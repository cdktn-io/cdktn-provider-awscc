# `drsLaunchConfigurationTemplate` Submodule <a name="`drsLaunchConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DrsLaunchConfigurationTemplate <a name="DrsLaunchConfigurationTemplate" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template awscc_drs_launch_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate(scope: Construct, id: string, config?: DrsLaunchConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig">DrsLaunchConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig">DrsLaunchConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing">putLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp">resetCopyPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags">resetCopyTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn">resetExportBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition">resetLaunchDisposition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance">resetLaunchIntoSourceInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing">resetLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled">resetPostLaunchEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod">resetTargetInstanceTypeRightSizingMethod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLicensing` <a name="putLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing"></a>

```typescript
public putLicensing(value: DrsLaunchConfigurationTemplateLicensing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putLicensing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | DrsLaunchConfigurationTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

---

##### `resetCopyPrivateIp` <a name="resetCopyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyPrivateIp"></a>

```typescript
public resetCopyPrivateIp(): void
```

##### `resetCopyTags` <a name="resetCopyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetCopyTags"></a>

```typescript
public resetCopyTags(): void
```

##### `resetExportBucketArn` <a name="resetExportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetExportBucketArn"></a>

```typescript
public resetExportBucketArn(): void
```

##### `resetLaunchDisposition` <a name="resetLaunchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchDisposition"></a>

```typescript
public resetLaunchDisposition(): void
```

##### `resetLaunchIntoSourceInstance` <a name="resetLaunchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLaunchIntoSourceInstance"></a>

```typescript
public resetLaunchIntoSourceInstance(): void
```

##### `resetLicensing` <a name="resetLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetLicensing"></a>

```typescript
public resetLicensing(): void
```

##### `resetPostLaunchEnabled` <a name="resetPostLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetPostLaunchEnabled"></a>

```typescript
public resetPostLaunchEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetInstanceTypeRightSizingMethod` <a name="resetTargetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.resetTargetInstanceTypeRightSizingMethod"></a>

```typescript
public resetTargetInstanceTypeRightSizingMethod(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DrsLaunchConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DrsLaunchConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DrsLaunchConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DrsLaunchConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId">launchConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput">copyPrivateIpInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput">copyTagsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput">exportBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput">launchDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput">launchIntoSourceInstanceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput">licensingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput">postLaunchEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput">targetInstanceTypeRightSizingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp">copyPrivateIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags">copyTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn">exportBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition">launchDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance">launchIntoSourceInstance</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled">postLaunchEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod">targetInstanceTypeRightSizingMethod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchConfigurationTemplateId`<sup>Required</sup> <a name="launchConfigurationTemplateId" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchConfigurationTemplateId"></a>

```typescript
public readonly launchConfigurationTemplateId: string;
```

- *Type:* string

---

##### `licensing`<sup>Required</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensing"></a>

```typescript
public readonly licensing: DrsLaunchConfigurationTemplateLicensingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference">DrsLaunchConfigurationTemplateLicensingOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tags"></a>

```typescript
public readonly tags: DrsLaunchConfigurationTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList">DrsLaunchConfigurationTemplateTagsList</a>

---

##### `copyPrivateIpInput`<sup>Optional</sup> <a name="copyPrivateIpInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIpInput"></a>

```typescript
public readonly copyPrivateIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `copyTagsInput`<sup>Optional</sup> <a name="copyTagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTagsInput"></a>

```typescript
public readonly copyTagsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exportBucketArnInput`<sup>Optional</sup> <a name="exportBucketArnInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArnInput"></a>

```typescript
public readonly exportBucketArnInput: string;
```

- *Type:* string

---

##### `launchDispositionInput`<sup>Optional</sup> <a name="launchDispositionInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDispositionInput"></a>

```typescript
public readonly launchDispositionInput: string;
```

- *Type:* string

---

##### `launchIntoSourceInstanceInput`<sup>Optional</sup> <a name="launchIntoSourceInstanceInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstanceInput"></a>

```typescript
public readonly launchIntoSourceInstanceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `licensingInput`<sup>Optional</sup> <a name="licensingInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.licensingInput"></a>

```typescript
public readonly licensingInput: IResolvable | DrsLaunchConfigurationTemplateLicensing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---

##### `postLaunchEnabledInput`<sup>Optional</sup> <a name="postLaunchEnabledInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabledInput"></a>

```typescript
public readonly postLaunchEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DrsLaunchConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

---

##### `targetInstanceTypeRightSizingMethodInput`<sup>Optional</sup> <a name="targetInstanceTypeRightSizingMethodInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethodInput"></a>

```typescript
public readonly targetInstanceTypeRightSizingMethodInput: string;
```

- *Type:* string

---

##### `copyPrivateIp`<sup>Required</sup> <a name="copyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyPrivateIp"></a>

```typescript
public readonly copyPrivateIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `copyTags`<sup>Required</sup> <a name="copyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.copyTags"></a>

```typescript
public readonly copyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exportBucketArn`<sup>Required</sup> <a name="exportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.exportBucketArn"></a>

```typescript
public readonly exportBucketArn: string;
```

- *Type:* string

---

##### `launchDisposition`<sup>Required</sup> <a name="launchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchDisposition"></a>

```typescript
public readonly launchDisposition: string;
```

- *Type:* string

---

##### `launchIntoSourceInstance`<sup>Required</sup> <a name="launchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.launchIntoSourceInstance"></a>

```typescript
public readonly launchIntoSourceInstance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `postLaunchEnabled`<sup>Required</sup> <a name="postLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.postLaunchEnabled"></a>

```typescript
public readonly postLaunchEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `targetInstanceTypeRightSizingMethod`<sup>Required</sup> <a name="targetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.targetInstanceTypeRightSizingMethod"></a>

```typescript
public readonly targetInstanceTypeRightSizingMethod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DrsLaunchConfigurationTemplateConfig <a name="DrsLaunchConfigurationTemplateConfig" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.Initializer"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

const drsLaunchConfigurationTemplateConfig: drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp">copyPrivateIp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Copy private IP. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags">copyTags</a></code> | <code>boolean \| cdktn.IResolvable</code> | Copy tags. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn">exportBucketArn</a></code> | <code>string</code> | S3 bucket ARN to export Source Network templates. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition">launchDisposition</a></code> | <code>string</code> | Launch disposition. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance">launchIntoSourceInstance</a></code> | <code>boolean \| cdktn.IResolvable</code> | DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing">licensing</a></code> | <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | Configuration of a machine's license. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled">postLaunchEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether we want to activate post-launch actions. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]</code> | A set of tags associated with the Launch Configuration Template. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod">targetInstanceTypeRightSizingMethod</a></code> | <code>string</code> | Target instance type right-sizing method. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `copyPrivateIp`<sup>Optional</sup> <a name="copyPrivateIp" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyPrivateIp"></a>

```typescript
public readonly copyPrivateIp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Copy private IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_private_ip DrsLaunchConfigurationTemplate#copy_private_ip}

---

##### `copyTags`<sup>Optional</sup> <a name="copyTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.copyTags"></a>

```typescript
public readonly copyTags: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Copy tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#copy_tags DrsLaunchConfigurationTemplate#copy_tags}

---

##### `exportBucketArn`<sup>Optional</sup> <a name="exportBucketArn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.exportBucketArn"></a>

```typescript
public readonly exportBucketArn: string;
```

- *Type:* string

S3 bucket ARN to export Source Network templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#export_bucket_arn DrsLaunchConfigurationTemplate#export_bucket_arn}

---

##### `launchDisposition`<sup>Optional</sup> <a name="launchDisposition" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchDisposition"></a>

```typescript
public readonly launchDisposition: string;
```

- *Type:* string

Launch disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_disposition DrsLaunchConfigurationTemplate#launch_disposition}

---

##### `launchIntoSourceInstance`<sup>Optional</sup> <a name="launchIntoSourceInstance" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.launchIntoSourceInstance"></a>

```typescript
public readonly launchIntoSourceInstance: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#launch_into_source_instance DrsLaunchConfigurationTemplate#launch_into_source_instance}

---

##### `licensing`<sup>Optional</sup> <a name="licensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.licensing"></a>

```typescript
public readonly licensing: DrsLaunchConfigurationTemplateLicensing;
```

- *Type:* <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

Configuration of a machine's license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#licensing DrsLaunchConfigurationTemplate#licensing}

---

##### `postLaunchEnabled`<sup>Optional</sup> <a name="postLaunchEnabled" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.postLaunchEnabled"></a>

```typescript
public readonly postLaunchEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether we want to activate post-launch actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#post_launch_enabled DrsLaunchConfigurationTemplate#post_launch_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DrsLaunchConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

A set of tags associated with the Launch Configuration Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#tags DrsLaunchConfigurationTemplate#tags}

---

##### `targetInstanceTypeRightSizingMethod`<sup>Optional</sup> <a name="targetInstanceTypeRightSizingMethod" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateConfig.property.targetInstanceTypeRightSizingMethod"></a>

```typescript
public readonly targetInstanceTypeRightSizingMethod: string;
```

- *Type:* string

Target instance type right-sizing method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#target_instance_type_right_sizing_method DrsLaunchConfigurationTemplate#target_instance_type_right_sizing_method}

---

### DrsLaunchConfigurationTemplateLicensing <a name="DrsLaunchConfigurationTemplateLicensing" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.Initializer"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

const drsLaunchConfigurationTemplateLicensing: drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol">osByol</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable Bring your own license or not. |

---

##### `osByol`<sup>Optional</sup> <a name="osByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing.property.osByol"></a>

```typescript
public readonly osByol: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable Bring your own license or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#os_byol DrsLaunchConfigurationTemplate#os_byol}

---

### DrsLaunchConfigurationTemplateTags <a name="DrsLaunchConfigurationTemplateTags" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.Initializer"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

const drsLaunchConfigurationTemplateTags: drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#key DrsLaunchConfigurationTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/drs_launch_configuration_template#value DrsLaunchConfigurationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DrsLaunchConfigurationTemplateLicensingOutputReference <a name="DrsLaunchConfigurationTemplateLicensingOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol">resetOsByol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOsByol` <a name="resetOsByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.resetOsByol"></a>

```typescript
public resetOsByol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput">osByolInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol">osByol</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `osByolInput`<sup>Optional</sup> <a name="osByolInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByolInput"></a>

```typescript
public readonly osByolInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `osByol`<sup>Required</sup> <a name="osByol" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.osByol"></a>

```typescript
public readonly osByol: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DrsLaunchConfigurationTemplateLicensing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateLicensing">DrsLaunchConfigurationTemplateLicensing</a>

---


### DrsLaunchConfigurationTemplateTagsList <a name="DrsLaunchConfigurationTemplateTagsList" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get"></a>

```typescript
public get(index: number): DrsLaunchConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DrsLaunchConfigurationTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>[]

---


### DrsLaunchConfigurationTemplateTagsOutputReference <a name="DrsLaunchConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer"></a>

```typescript
import { drsLaunchConfigurationTemplate } from '@cdktn/provider-awscc'

new drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DrsLaunchConfigurationTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.drsLaunchConfigurationTemplate.DrsLaunchConfigurationTemplateTags">DrsLaunchConfigurationTemplateTags</a>

---



