# `iotSecurityProfile` Submodule <a name="`iotSecurityProfile` Submodule" id="@cdktn/provider-awscc.iotSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecurityProfile <a name="IotSecurityProfile" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile awscc_iot_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfile(scope: Construct, id: string, config?: IotSecurityProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig">IotSecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig">IotSecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2">putAdditionalMetricsToRetainV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets">putAlertTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors">putBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig">putMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2">resetAdditionalMetricsToRetainV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets">resetAlertTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors">resetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig">resetMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription">resetSecurityProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName">resetSecurityProfileName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns">resetTargetArns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalMetricsToRetainV2` <a name="putAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2"></a>

```typescript
public putAdditionalMetricsToRetainV2(value: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAdditionalMetricsToRetainV2.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>[]

---

##### `putAlertTargets` <a name="putAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets"></a>

```typescript
public putAlertTargets(value: IResolvable | {[ key: string ]: IotSecurityProfileAlertTargets}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putAlertTargets.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>}

---

##### `putBehaviors` <a name="putBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors"></a>

```typescript
public putBehaviors(value: IResolvable | IotSecurityProfileBehaviors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putBehaviors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>[]

---

##### `putMetricsExportConfig` <a name="putMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig"></a>

```typescript
public putMetricsExportConfig(value: IotSecurityProfileMetricsExportConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putMetricsExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags"></a>

```typescript
public putTags(value: IResolvable | IotSecurityProfileTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>[]

---

##### `resetAdditionalMetricsToRetainV2` <a name="resetAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAdditionalMetricsToRetainV2"></a>

```typescript
public resetAdditionalMetricsToRetainV2(): void
```

##### `resetAlertTargets` <a name="resetAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetAlertTargets"></a>

```typescript
public resetAlertTargets(): void
```

##### `resetBehaviors` <a name="resetBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetBehaviors"></a>

```typescript
public resetBehaviors(): void
```

##### `resetMetricsExportConfig` <a name="resetMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetMetricsExportConfig"></a>

```typescript
public resetMetricsExportConfig(): void
```

##### `resetSecurityProfileDescription` <a name="resetSecurityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileDescription"></a>

```typescript
public resetSecurityProfileDescription(): void
```

##### `resetSecurityProfileName` <a name="resetSecurityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetSecurityProfileName"></a>

```typescript
public resetSecurityProfileName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetArns` <a name="resetTargetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.resetTargetArns"></a>

```typescript
public resetTargetArns(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

iotSecurityProfile.IotSecurityProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

iotSecurityProfile.IotSecurityProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

iotSecurityProfile.IotSecurityProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

iotSecurityProfile.IotSecurityProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2">additionalMetricsToRetainV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets">alertTargets</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors">behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig">metricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn">securityProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input">additionalMetricsToRetainV2Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput">alertTargetsInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput">behaviorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput">metricsExportConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput">securityProfileDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput">securityProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput">targetArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription">securityProfileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns">targetArns</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalMetricsToRetainV2`<sup>Required</sup> <a name="additionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2"></a>

```typescript
public readonly additionalMetricsToRetainV2: IotSecurityProfileAdditionalMetricsToRetainV2List;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List">IotSecurityProfileAdditionalMetricsToRetainV2List</a>

---

##### `alertTargets`<sup>Required</sup> <a name="alertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargets"></a>

```typescript
public readonly alertTargets: IotSecurityProfileAlertTargetsMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap">IotSecurityProfileAlertTargetsMap</a>

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviors"></a>

```typescript
public readonly behaviors: IotSecurityProfileBehaviorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList">IotSecurityProfileBehaviorsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricsExportConfig`<sup>Required</sup> <a name="metricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfig"></a>

```typescript
public readonly metricsExportConfig: IotSecurityProfileMetricsExportConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference">IotSecurityProfileMetricsExportConfigOutputReference</a>

---

##### `securityProfileArn`<sup>Required</sup> <a name="securityProfileArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileArn"></a>

```typescript
public readonly securityProfileArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tags"></a>

```typescript
public readonly tags: IotSecurityProfileTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList">IotSecurityProfileTagsList</a>

---

##### `additionalMetricsToRetainV2Input`<sup>Optional</sup> <a name="additionalMetricsToRetainV2Input" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.additionalMetricsToRetainV2Input"></a>

```typescript
public readonly additionalMetricsToRetainV2Input: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>[]

---

##### `alertTargetsInput`<sup>Optional</sup> <a name="alertTargetsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.alertTargetsInput"></a>

```typescript
public readonly alertTargetsInput: IResolvable | {[ key: string ]: IotSecurityProfileAlertTargets};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>}

---

##### `behaviorsInput`<sup>Optional</sup> <a name="behaviorsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.behaviorsInput"></a>

```typescript
public readonly behaviorsInput: IResolvable | IotSecurityProfileBehaviors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>[]

---

##### `metricsExportConfigInput`<sup>Optional</sup> <a name="metricsExportConfigInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.metricsExportConfigInput"></a>

```typescript
public readonly metricsExportConfigInput: IResolvable | IotSecurityProfileMetricsExportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---

##### `securityProfileDescriptionInput`<sup>Optional</sup> <a name="securityProfileDescriptionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescriptionInput"></a>

```typescript
public readonly securityProfileDescriptionInput: string;
```

- *Type:* string

---

##### `securityProfileNameInput`<sup>Optional</sup> <a name="securityProfileNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileNameInput"></a>

```typescript
public readonly securityProfileNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotSecurityProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>[]

---

##### `targetArnsInput`<sup>Optional</sup> <a name="targetArnsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArnsInput"></a>

```typescript
public readonly targetArnsInput: string[];
```

- *Type:* string[]

---

##### `securityProfileDescription`<sup>Required</sup> <a name="securityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileDescription"></a>

```typescript
public readonly securityProfileDescription: string;
```

- *Type:* string

---

##### `securityProfileName`<sup>Required</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

---

##### `targetArns`<sup>Required</sup> <a name="targetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.targetArns"></a>

```typescript
public readonly targetArns: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2 <a name="IotSecurityProfileAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileAdditionalMetricsToRetainV2: iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric">exportMetric</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric">metric</a></code> | <code>string</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | The dimension of a metric. |

---

##### `exportMetric`<sup>Optional</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.exportMetric"></a>

```typescript
public readonly exportMetric: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `metricDimension`<sup>Optional</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2.property.metricDimension"></a>

```typescript
public readonly metricDimension: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileAdditionalMetricsToRetainV2MetricDimension: iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName">dimensionName</a></code> | <code>string</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator">operator</a></code> | <code>string</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileAlertTargets <a name="IotSecurityProfileAlertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileAlertTargets: iotSecurityProfile.IotSecurityProfileAlertTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn">alertTargetArn</a></code> | <code>string</code> | The ARN of the notification target to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that grants permission to send alerts to the notification target. |

---

##### `alertTargetArn`<sup>Optional</sup> <a name="alertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.alertTargetArn"></a>

```typescript
public readonly alertTargetArn: string;
```

- *Type:* string

The ARN of the notification target to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#alert_target_arn IotSecurityProfile#alert_target_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that grants permission to send alerts to the notification target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileBehaviors <a name="IotSecurityProfileBehaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileBehaviors: iotSecurityProfile.IotSecurityProfileBehaviors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | The criteria by which the behavior is determined to be normal. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric">exportMetric</a></code> | <code>boolean \| cdktn.IResolvable</code> | Flag to enable/disable metrics export for metric to be retained. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric">metric</a></code> | <code>string</code> | What is measured by the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | The dimension of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name">name</a></code> | <code>string</code> | The name for the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts">suppressAlerts</a></code> | <code>boolean \| cdktn.IResolvable</code> | Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. |

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.criteria"></a>

```typescript
public readonly criteria: IotSecurityProfileBehaviorsCriteria;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

The criteria by which the behavior is determined to be normal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#criteria IotSecurityProfile#criteria}

---

##### `exportMetric`<sup>Optional</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.exportMetric"></a>

```typescript
public readonly exportMetric: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Flag to enable/disable metrics export for metric to be retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#export_metric IotSecurityProfile#export_metric}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

What is measured by the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#metric IotSecurityProfile#metric}

---

##### `metricDimension`<sup>Optional</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.metricDimension"></a>

```typescript
public readonly metricDimension: IotSecurityProfileBehaviorsMetricDimension;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

The dimension of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#metric_dimension IotSecurityProfile#metric_dimension}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#name IotSecurityProfile#name}

---

##### `suppressAlerts`<sup>Optional</sup> <a name="suppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors.property.suppressAlerts"></a>

```typescript
public readonly suppressAlerts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed.

Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#suppress_alerts IotSecurityProfile#suppress_alerts}

---

### IotSecurityProfileBehaviorsCriteria <a name="IotSecurityProfileBehaviorsCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileBehaviorsCriteria: iotSecurityProfile.IotSecurityProfileBehaviorsCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm">consecutiveDatapointsToAlarm</a></code> | <code>number</code> | If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear">consecutiveDatapointsToClear</a></code> | <code>number</code> | If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | Use this to specify the time duration over which the behavior is evaluated. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig">mlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | The configuration of an ML Detect Security Profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold">statisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | The value to be compared with the metric. |

---

##### `comparisonOperator`<sup>Optional</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#comparison_operator IotSecurityProfile#comparison_operator}

---

##### `consecutiveDatapointsToAlarm`<sup>Optional</sup> <a name="consecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToAlarm"></a>

```typescript
public readonly consecutiveDatapointsToAlarm: number;
```

- *Type:* number

If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#consecutive_datapoints_to_alarm IotSecurityProfile#consecutive_datapoints_to_alarm}

---

##### `consecutiveDatapointsToClear`<sup>Optional</sup> <a name="consecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.consecutiveDatapointsToClear"></a>

```typescript
public readonly consecutiveDatapointsToClear: number;
```

- *Type:* number

If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared.

If not specified, the default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#consecutive_datapoints_to_clear IotSecurityProfile#consecutive_datapoints_to_clear}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

Use this to specify the time duration over which the behavior is evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#duration_seconds IotSecurityProfile#duration_seconds}

---

##### `mlDetectionConfig`<sup>Optional</sup> <a name="mlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.mlDetectionConfig"></a>

```typescript
public readonly mlDetectionConfig: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

The configuration of an ML Detect Security Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#ml_detection_config IotSecurityProfile#ml_detection_config}

---

##### `statisticalThreshold`<sup>Optional</sup> <a name="statisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.statisticalThreshold"></a>

```typescript
public readonly statisticalThreshold: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#statistical_threshold IotSecurityProfile#statistical_threshold}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria.property.value"></a>

```typescript
public readonly value: IotSecurityProfileBehaviorsCriteriaValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

The value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

### IotSecurityProfileBehaviorsCriteriaMlDetectionConfig <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileBehaviorsCriteriaMlDetectionConfig: iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel">confidenceLevel</a></code> | <code>string</code> | The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High. |

---

##### `confidenceLevel`<sup>Optional</sup> <a name="confidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig.property.confidenceLevel"></a>

```typescript
public readonly confidenceLevel: string;
```

- *Type:* string

The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#confidence_level IotSecurityProfile#confidence_level}

---

### IotSecurityProfileBehaviorsCriteriaStatisticalThreshold <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileBehaviorsCriteriaStatisticalThreshold: iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic">statistic</a></code> | <code>string</code> | The percentile which resolves to a threshold value by which compliance with a behavior is determined. |

---

##### `statistic`<sup>Optional</sup> <a name="statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

The percentile which resolves to a threshold value by which compliance with a behavior is determined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#statistic IotSecurityProfile#statistic}

---

### IotSecurityProfileBehaviorsCriteriaValue <a name="IotSecurityProfileBehaviorsCriteriaValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileBehaviorsCriteriaValue: iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs">cidrs</a></code> | <code>string[]</code> | If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count">count</a></code> | <code>string</code> | If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number">number</a></code> | <code>number</code> | The numeral value of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers">numbers</a></code> | <code>number[]</code> | The numeral values of a metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports">ports</a></code> | <code>number[]</code> | If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings">strings</a></code> | <code>string[]</code> | The string values of a metric. |

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#cidrs IotSecurityProfile#cidrs}

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#count IotSecurityProfile#count}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

The numeral value of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#number IotSecurityProfile#number}

---

##### `numbers`<sup>Optional</sup> <a name="numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.numbers"></a>

```typescript
public readonly numbers: number[];
```

- *Type:* number[]

The numeral values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#numbers IotSecurityProfile#numbers}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#ports IotSecurityProfile#ports}

---

##### `strings`<sup>Optional</sup> <a name="strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue.property.strings"></a>

```typescript
public readonly strings: string[];
```

- *Type:* string[]

The string values of a metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#strings IotSecurityProfile#strings}

---

### IotSecurityProfileBehaviorsMetricDimension <a name="IotSecurityProfileBehaviorsMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileBehaviorsMetricDimension: iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName">dimensionName</a></code> | <code>string</code> | A unique identifier for the dimension. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator">operator</a></code> | <code>string</code> | Defines how the dimensionValues of a dimension are interpreted. |

---

##### `dimensionName`<sup>Optional</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

A unique identifier for the dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#dimension_name IotSecurityProfile#dimension_name}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Defines how the dimensionValues of a dimension are interpreted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#operator IotSecurityProfile#operator}

---

### IotSecurityProfileConfig <a name="IotSecurityProfileConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileConfig: iotSecurityProfile.IotSecurityProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2">additionalMetricsToRetainV2</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>[]</code> | A list of metrics whose data is retained (stored). |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets">alertTargets</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>}</code> | Specifies the destinations to which alerts are sent. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors">behaviors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>[]</code> | Specifies the behaviors that, when violated by a device (thing), cause an alert. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig">metricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | A structure containing the mqtt topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription">securityProfileDescription</a></code> | <code>string</code> | A description of the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName">securityProfileName</a></code> | <code>string</code> | A unique identifier for the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>[]</code> | Metadata that can be used to manage the security profile. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns">targetArns</a></code> | <code>string[]</code> | A set of target ARNs that the security profile is attached to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `additionalMetricsToRetainV2`<sup>Optional</sup> <a name="additionalMetricsToRetainV2" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.additionalMetricsToRetainV2"></a>

```typescript
public readonly additionalMetricsToRetainV2: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>[]

A list of metrics whose data is retained (stored).

By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#additional_metrics_to_retain_v2 IotSecurityProfile#additional_metrics_to_retain_v2}

---

##### `alertTargets`<sup>Optional</sup> <a name="alertTargets" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.alertTargets"></a>

```typescript
public readonly alertTargets: IResolvable | {[ key: string ]: IotSecurityProfileAlertTargets};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>}

Specifies the destinations to which alerts are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#alert_targets IotSecurityProfile#alert_targets}

---

##### `behaviors`<sup>Optional</sup> <a name="behaviors" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.behaviors"></a>

```typescript
public readonly behaviors: IResolvable | IotSecurityProfileBehaviors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>[]

Specifies the behaviors that, when violated by a device (thing), cause an alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#behaviors IotSecurityProfile#behaviors}

---

##### `metricsExportConfig`<sup>Optional</sup> <a name="metricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.metricsExportConfig"></a>

```typescript
public readonly metricsExportConfig: IotSecurityProfileMetricsExportConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

A structure containing the mqtt topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#metrics_export_config IotSecurityProfile#metrics_export_config}

---

##### `securityProfileDescription`<sup>Optional</sup> <a name="securityProfileDescription" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileDescription"></a>

```typescript
public readonly securityProfileDescription: string;
```

- *Type:* string

A description of the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#security_profile_description IotSecurityProfile#security_profile_description}

---

##### `securityProfileName`<sup>Optional</sup> <a name="securityProfileName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.securityProfileName"></a>

```typescript
public readonly securityProfileName: string;
```

- *Type:* string

A unique identifier for the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#security_profile_name IotSecurityProfile#security_profile_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotSecurityProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>[]

Metadata that can be used to manage the security profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#tags IotSecurityProfile#tags}

---

##### `targetArns`<sup>Optional</sup> <a name="targetArns" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileConfig.property.targetArns"></a>

```typescript
public readonly targetArns: string[];
```

- *Type:* string[]

A set of target ARNs that the security profile is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#target_arns IotSecurityProfile#target_arns}

---

### IotSecurityProfileMetricsExportConfig <a name="IotSecurityProfileMetricsExportConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileMetricsExportConfig: iotSecurityProfile.IotSecurityProfileMetricsExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic">mqttTopic</a></code> | <code>string</code> | The topic for metrics export. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that grants permission to publish to mqtt topic. |

---

##### `mqttTopic`<sup>Optional</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.mqttTopic"></a>

```typescript
public readonly mqttTopic: string;
```

- *Type:* string

The topic for metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#mqtt_topic IotSecurityProfile#mqtt_topic}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that grants permission to publish to mqtt topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#role_arn IotSecurityProfile#role_arn}

---

### IotSecurityProfileTags <a name="IotSecurityProfileTags" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

const iotSecurityProfileTags: iotSecurityProfile.IotSecurityProfileTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key">key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value">value</a></code> | <code>string</code> | The tag's value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#key IotSecurityProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iot_security_profile#value IotSecurityProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecurityProfileAdditionalMetricsToRetainV2List <a name="IotSecurityProfileAdditionalMetricsToRetainV2List" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get"></a>

```typescript
public get(index: number): IotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2List.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>[]

---


### IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetDimensionName"></a>

```typescript
public resetDimensionName(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionNameInput"></a>

```typescript
public readonly dimensionNameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---


### IotSecurityProfileAdditionalMetricsToRetainV2OutputReference <a name="IotSecurityProfileAdditionalMetricsToRetainV2OutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension">putMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric">resetExportMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension">resetMetricDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDimension` <a name="putMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension"></a>

```typescript
public putMetricDimension(value: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.putMetricDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---

##### `resetExportMetric` <a name="resetExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetExportMetric"></a>

```typescript
public resetExportMetric(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMetricDimension` <a name="resetMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resetMetricDimension"></a>

```typescript
public resetMetricDimension(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput">exportMetricInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput">metricDimensionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric">exportMetric</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDimension`<sup>Required</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension"></a>

```typescript
public readonly metricDimension: IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a>

---

##### `exportMetricInput`<sup>Optional</sup> <a name="exportMetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetricInput"></a>

```typescript
public readonly exportMetricInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metricDimensionInput`<sup>Optional</sup> <a name="metricDimensionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimensionInput"></a>

```typescript
public readonly metricDimensionInput: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">IotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `exportMetric`<sup>Required</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric"></a>

```typescript
public readonly exportMetric: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileAdditionalMetricsToRetainV2;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAdditionalMetricsToRetainV2">IotSecurityProfileAdditionalMetricsToRetainV2</a>

---


### IotSecurityProfileAlertTargetsMap <a name="IotSecurityProfileAlertTargetsMap" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileAlertTargetsMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get"></a>

```typescript
public get(key: string): IotSecurityProfileAlertTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: IotSecurityProfileAlertTargets};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>}

---


### IotSecurityProfileAlertTargetsOutputReference <a name="IotSecurityProfileAlertTargetsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn">resetAlertTargetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlertTargetArn` <a name="resetAlertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetAlertTargetArn"></a>

```typescript
public resetAlertTargetArn(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput">alertTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn">alertTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alertTargetArnInput`<sup>Optional</sup> <a name="alertTargetArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArnInput"></a>

```typescript
public readonly alertTargetArnInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `alertTargetArn`<sup>Required</sup> <a name="alertTargetArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn"></a>

```typescript
public readonly alertTargetArn: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileAlertTargets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileAlertTargets">IotSecurityProfileAlertTargets</a>

---


### IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference <a name="IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel">resetConfidenceLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfidenceLevel` <a name="resetConfidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resetConfidenceLevel"></a>

```typescript
public resetConfidenceLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput">confidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel">confidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `confidenceLevelInput`<sup>Optional</sup> <a name="confidenceLevelInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevelInput"></a>

```typescript
public readonly confidenceLevelInput: string;
```

- *Type:* string

---

##### `confidenceLevel`<sup>Required</sup> <a name="confidenceLevel" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel"></a>

```typescript
public readonly confidenceLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileBehaviorsCriteriaMlDetectionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---


### IotSecurityProfileBehaviorsCriteriaOutputReference <a name="IotSecurityProfileBehaviorsCriteriaOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig">putMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold">putStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator">resetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm">resetConsecutiveDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear">resetConsecutiveDatapointsToClear</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig">resetMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold">resetStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMlDetectionConfig` <a name="putMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig"></a>

```typescript
public putMlDetectionConfig(value: IotSecurityProfileBehaviorsCriteriaMlDetectionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putMlDetectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---

##### `putStatisticalThreshold` <a name="putStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold"></a>

```typescript
public putStatisticalThreshold(value: IotSecurityProfileBehaviorsCriteriaStatisticalThreshold): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putStatisticalThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---

##### `putValue` <a name="putValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue"></a>

```typescript
public putValue(value: IotSecurityProfileBehaviorsCriteriaValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---

##### `resetComparisonOperator` <a name="resetComparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetComparisonOperator"></a>

```typescript
public resetComparisonOperator(): void
```

##### `resetConsecutiveDatapointsToAlarm` <a name="resetConsecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToAlarm"></a>

```typescript
public resetConsecutiveDatapointsToAlarm(): void
```

##### `resetConsecutiveDatapointsToClear` <a name="resetConsecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetConsecutiveDatapointsToClear"></a>

```typescript
public resetConsecutiveDatapointsToClear(): void
```

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetMlDetectionConfig` <a name="resetMlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetMlDetectionConfig"></a>

```typescript
public resetMlDetectionConfig(): void
```

##### `resetStatisticalThreshold` <a name="resetStatisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetStatisticalThreshold"></a>

```typescript
public resetStatisticalThreshold(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig">mlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold">statisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput">consecutiveDatapointsToAlarmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput">consecutiveDatapointsToClearInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput">mlDetectionConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput">statisticalThresholdInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput">valueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm">consecutiveDatapointsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear">consecutiveDatapointsToClear</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mlDetectionConfig`<sup>Required</sup> <a name="mlDetectionConfig" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig"></a>

```typescript
public readonly mlDetectionConfig: IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">IotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a>

---

##### `statisticalThreshold`<sup>Required</sup> <a name="statisticalThreshold" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold"></a>

```typescript
public readonly statisticalThreshold: IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.value"></a>

```typescript
public readonly value: IotSecurityProfileBehaviorsCriteriaValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference">IotSecurityProfileBehaviorsCriteriaValueOutputReference</a>

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `consecutiveDatapointsToAlarmInput`<sup>Optional</sup> <a name="consecutiveDatapointsToAlarmInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarmInput"></a>

```typescript
public readonly consecutiveDatapointsToAlarmInput: number;
```

- *Type:* number

---

##### `consecutiveDatapointsToClearInput`<sup>Optional</sup> <a name="consecutiveDatapointsToClearInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClearInput"></a>

```typescript
public readonly consecutiveDatapointsToClearInput: number;
```

- *Type:* number

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `mlDetectionConfigInput`<sup>Optional</sup> <a name="mlDetectionConfigInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfigInput"></a>

```typescript
public readonly mlDetectionConfigInput: IResolvable | IotSecurityProfileBehaviorsCriteriaMlDetectionConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaMlDetectionConfig">IotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---

##### `statisticalThresholdInput`<sup>Optional</sup> <a name="statisticalThresholdInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThresholdInput"></a>

```typescript
public readonly statisticalThresholdInput: IResolvable | IotSecurityProfileBehaviorsCriteriaStatisticalThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: IResolvable | IotSecurityProfileBehaviorsCriteriaValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `consecutiveDatapointsToAlarm`<sup>Required</sup> <a name="consecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm"></a>

```typescript
public readonly consecutiveDatapointsToAlarm: number;
```

- *Type:* number

---

##### `consecutiveDatapointsToClear`<sup>Required</sup> <a name="consecutiveDatapointsToClear" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear"></a>

```typescript
public readonly consecutiveDatapointsToClear: number;
```

- *Type:* number

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileBehaviorsCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---


### IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference <a name="IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic">resetStatistic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatistic` <a name="resetStatistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resetStatistic"></a>

```typescript
public resetStatistic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput">statisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statisticInput"></a>

```typescript
public readonly statisticInput: string;
```

- *Type:* string

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileBehaviorsCriteriaStatisticalThreshold;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaStatisticalThreshold">IotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---


### IotSecurityProfileBehaviorsCriteriaValueOutputReference <a name="IotSecurityProfileBehaviorsCriteriaValueOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs">resetCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers">resetNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts">resetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings">resetStrings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrs` <a name="resetCidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCidrs"></a>

```typescript
public resetCidrs(): void
```

##### `resetCount` <a name="resetCount" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetNumber` <a name="resetNumber" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumber"></a>

```typescript
public resetNumber(): void
```

##### `resetNumbers` <a name="resetNumbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetNumbers"></a>

```typescript
public resetNumbers(): void
```

##### `resetPorts` <a name="resetPorts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```

##### `resetStrings` <a name="resetStrings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.resetStrings"></a>

```typescript
public resetStrings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput">cidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput">countInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput">numberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput">numbersInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput">portsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput">stringsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs">cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count">count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number">number</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers">numbers</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports">ports</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings">strings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrsInput`<sup>Optional</sup> <a name="cidrsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrsInput"></a>

```typescript
public readonly cidrsInput: string[];
```

- *Type:* string[]

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.countInput"></a>

```typescript
public readonly countInput: string;
```

- *Type:* string

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numberInput"></a>

```typescript
public readonly numberInput: number;
```

- *Type:* number

---

##### `numbersInput`<sup>Optional</sup> <a name="numbersInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbersInput"></a>

```typescript
public readonly numbersInput: number[];
```

- *Type:* number[]

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: number[];
```

- *Type:* number[]

---

##### `stringsInput`<sup>Optional</sup> <a name="stringsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.stringsInput"></a>

```typescript
public readonly stringsInput: string[];
```

- *Type:* string[]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs"></a>

```typescript
public readonly cidrs: string[];
```

- *Type:* string[]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count"></a>

```typescript
public readonly count: string;
```

- *Type:* string

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers"></a>

```typescript
public readonly numbers: number[];
```

- *Type:* number[]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports"></a>

```typescript
public readonly ports: number[];
```

- *Type:* number[]

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings"></a>

```typescript
public readonly strings: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileBehaviorsCriteriaValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaValue">IotSecurityProfileBehaviorsCriteriaValue</a>

---


### IotSecurityProfileBehaviorsList <a name="IotSecurityProfileBehaviorsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileBehaviorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get"></a>

```typescript
public get(index: number): IotSecurityProfileBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileBehaviors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>[]

---


### IotSecurityProfileBehaviorsMetricDimensionOutputReference <a name="IotSecurityProfileBehaviorsMetricDimensionOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName">resetDimensionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDimensionName` <a name="resetDimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetDimensionName"></a>

```typescript
public resetDimensionName(): void
```

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionNameInput"></a>

```typescript
public readonly dimensionNameInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileBehaviorsMetricDimension;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---


### IotSecurityProfileBehaviorsOutputReference <a name="IotSecurityProfileBehaviorsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension">putMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric">resetExportMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension">resetMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts">resetSuppressAlerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria"></a>

```typescript
public putCriteria(value: IotSecurityProfileBehaviorsCriteria): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---

##### `putMetricDimension` <a name="putMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension"></a>

```typescript
public putMetricDimension(value: IotSecurityProfileBehaviorsMetricDimension): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.putMetricDimension.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetExportMetric` <a name="resetExportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetExportMetric"></a>

```typescript
public resetExportMetric(): void
```

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMetricDimension` <a name="resetMetricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetMetricDimension"></a>

```typescript
public resetMetricDimension(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSuppressAlerts` <a name="resetSuppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.resetSuppressAlerts"></a>

```typescript
public resetSuppressAlerts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension">metricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput">exportMetricInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput">metricDimensionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput">metricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput">suppressAlertsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric">exportMetric</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric">metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts">suppressAlerts</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteria"></a>

```typescript
public readonly criteria: IotSecurityProfileBehaviorsCriteriaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteriaOutputReference">IotSecurityProfileBehaviorsCriteriaOutputReference</a>

---

##### `metricDimension`<sup>Required</sup> <a name="metricDimension" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimension"></a>

```typescript
public readonly metricDimension: IotSecurityProfileBehaviorsMetricDimensionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimensionOutputReference">IotSecurityProfileBehaviorsMetricDimensionOutputReference</a>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: IResolvable | IotSecurityProfileBehaviorsCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsCriteria">IotSecurityProfileBehaviorsCriteria</a>

---

##### `exportMetricInput`<sup>Optional</sup> <a name="exportMetricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetricInput"></a>

```typescript
public readonly exportMetricInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metricDimensionInput`<sup>Optional</sup> <a name="metricDimensionInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricDimensionInput"></a>

```typescript
public readonly metricDimensionInput: IResolvable | IotSecurityProfileBehaviorsMetricDimension;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsMetricDimension">IotSecurityProfileBehaviorsMetricDimension</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `suppressAlertsInput`<sup>Optional</sup> <a name="suppressAlertsInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlertsInput"></a>

```typescript
public readonly suppressAlertsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `exportMetric`<sup>Required</sup> <a name="exportMetric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.exportMetric"></a>

```typescript
public readonly exportMetric: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.metric"></a>

```typescript
public readonly metric: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `suppressAlerts`<sup>Required</sup> <a name="suppressAlerts" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.suppressAlerts"></a>

```typescript
public readonly suppressAlerts: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileBehaviors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileBehaviors">IotSecurityProfileBehaviors</a>

---


### IotSecurityProfileMetricsExportConfigOutputReference <a name="IotSecurityProfileMetricsExportConfigOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic">resetMqttTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMqttTopic` <a name="resetMqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetMqttTopic"></a>

```typescript
public resetMqttTopic(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput">mqttTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic">mqttTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mqttTopicInput`<sup>Optional</sup> <a name="mqttTopicInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopicInput"></a>

```typescript
public readonly mqttTopicInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `mqttTopic`<sup>Required</sup> <a name="mqttTopic" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic"></a>

```typescript
public readonly mqttTopic: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileMetricsExportConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileMetricsExportConfig">IotSecurityProfileMetricsExportConfig</a>

---


### IotSecurityProfileTagsList <a name="IotSecurityProfileTagsList" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get"></a>

```typescript
public get(index: number): IotSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>[]

---


### IotSecurityProfileTagsOutputReference <a name="IotSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer"></a>

```typescript
import { iotSecurityProfile } from '@cdktn/provider-awscc'

new iotSecurityProfile.IotSecurityProfileTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecurityProfileTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotSecurityProfile.IotSecurityProfileTags">IotSecurityProfileTags</a>

---



