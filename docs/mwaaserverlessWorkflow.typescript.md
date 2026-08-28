# `mwaaserverlessWorkflow` Submodule <a name="`mwaaserverlessWorkflow` Submodule" id="@cdktn/provider-awscc.mwaaserverlessWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwaaserverlessWorkflow <a name="MwaaserverlessWorkflow" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow awscc_mwaaserverless_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflow(scope: Construct, id: string, config: MwaaserverlessWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig">MwaaserverlessWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig">MwaaserverlessWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putCode">putCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location">putDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration">putEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration">putLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration">resetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration">resetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode">resetTriggerMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCode` <a name="putCode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putCode"></a>

```typescript
public putCode(value: MwaaserverlessWorkflowCode): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

---

##### `putDefinitionS3Location` <a name="putDefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location"></a>

```typescript
public putDefinitionS3Location(value: MwaaserverlessWorkflowDefinitionS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putDefinitionS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---

##### `putEncryptionConfiguration` <a name="putEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration"></a>

```typescript
public putEncryptionConfiguration(value: MwaaserverlessWorkflowEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---

##### `putLoggingConfiguration` <a name="putLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration"></a>

```typescript
public putLoggingConfiguration(value: MwaaserverlessWorkflowLoggingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration"></a>

```typescript
public putNetworkConfiguration(value: MwaaserverlessWorkflowNetworkConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---

##### `resetCode` <a name="resetCode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionConfiguration` <a name="resetEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetEncryptionConfiguration"></a>

```typescript
public resetEncryptionConfiguration(): void
```

##### `resetLoggingConfiguration` <a name="resetLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetLoggingConfiguration"></a>

```typescript
public resetLoggingConfiguration(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetNetworkConfiguration"></a>

```typescript
public resetNetworkConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTriggerMode` <a name="resetTriggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.resetTriggerMode"></a>

```typescript
public resetTriggerMode(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MwaaserverlessWorkflow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwaaserverlessWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwaaserverlessWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MwaaserverlessWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference">MwaaserverlessWorkflowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeSnapshottedAt">codeSnapshottedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration">scheduleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn">workflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus">workflowStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion">workflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeInput">codeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput">definitionS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput">encryptionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput">loggingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput">triggerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode">triggerMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.code"></a>

```typescript
public readonly code: MwaaserverlessWorkflowCodeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference">MwaaserverlessWorkflowCodeOutputReference</a>

---

##### `codeSnapshottedAt`<sup>Required</sup> <a name="codeSnapshottedAt" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeSnapshottedAt"></a>

```typescript
public readonly codeSnapshottedAt: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `definitionS3Location`<sup>Required</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3Location"></a>

```typescript
public readonly definitionS3Location: MwaaserverlessWorkflowDefinitionS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference">MwaaserverlessWorkflowDefinitionS3LocationOutputReference</a>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: MwaaserverlessWorkflowEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference">MwaaserverlessWorkflowEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingConfiguration`<sup>Required</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: MwaaserverlessWorkflowLoggingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference">MwaaserverlessWorkflowLoggingConfigurationOutputReference</a>

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: MwaaserverlessWorkflowNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference">MwaaserverlessWorkflowNetworkConfigurationOutputReference</a>

---

##### `scheduleConfiguration`<sup>Required</sup> <a name="scheduleConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.scheduleConfiguration"></a>

```typescript
public readonly scheduleConfiguration: MwaaserverlessWorkflowScheduleConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference">MwaaserverlessWorkflowScheduleConfigurationOutputReference</a>

---

##### `workflowArn`<sup>Required</sup> <a name="workflowArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowArn"></a>

```typescript
public readonly workflowArn: string;
```

- *Type:* string

---

##### `workflowStatus`<sup>Required</sup> <a name="workflowStatus" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowStatus"></a>

```typescript
public readonly workflowStatus: string;
```

- *Type:* string

---

##### `workflowVersion`<sup>Required</sup> <a name="workflowVersion" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.workflowVersion"></a>

```typescript
public readonly workflowVersion: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.codeInput"></a>

```typescript
public readonly codeInput: IResolvable | MwaaserverlessWorkflowCode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

---

##### `definitionS3LocationInput`<sup>Optional</sup> <a name="definitionS3LocationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.definitionS3LocationInput"></a>

```typescript
public readonly definitionS3LocationInput: IResolvable | MwaaserverlessWorkflowDefinitionS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationInput`<sup>Optional</sup> <a name="encryptionConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.encryptionConfigurationInput"></a>

```typescript
public readonly encryptionConfigurationInput: IResolvable | MwaaserverlessWorkflowEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---

##### `loggingConfigurationInput`<sup>Optional</sup> <a name="loggingConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.loggingConfigurationInput"></a>

```typescript
public readonly loggingConfigurationInput: IResolvable | MwaaserverlessWorkflowLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.networkConfigurationInput"></a>

```typescript
public readonly networkConfigurationInput: IResolvable | MwaaserverlessWorkflowNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `triggerModeInput`<sup>Optional</sup> <a name="triggerModeInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerModeInput"></a>

```typescript
public readonly triggerModeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `triggerMode`<sup>Required</sup> <a name="triggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwaaserverlessWorkflowCode <a name="MwaaserverlessWorkflowCode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowCode: mwaaserverlessWorkflow.MwaaserverlessWorkflowCode = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#s3_location MwaaserverlessWorkflow#s3_location}. |

---

##### `s3Location`<sup>Optional</sup> <a name="s3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode.property.s3Location"></a>

```typescript
public readonly s3Location: MwaaserverlessWorkflowCodeS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#s3_location MwaaserverlessWorkflow#s3_location}.

---

### MwaaserverlessWorkflowCodeS3Location <a name="MwaaserverlessWorkflowCodeS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowCodeS3Location: mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.objectKey">objectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

### MwaaserverlessWorkflowConfig <a name="MwaaserverlessWorkflowConfig" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowConfig: mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location">definitionS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a></code> | The location of code artifacts in Amazon S3 for the workflow. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration">loggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A map of key-value pairs to be applied as tags. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode">triggerMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `definitionS3Location`<sup>Required</sup> <a name="definitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.definitionS3Location"></a>

```typescript
public readonly definitionS3Location: MwaaserverlessWorkflowDefinitionS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#definition_s3_location MwaaserverlessWorkflow#definition_s3_location}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#role_arn MwaaserverlessWorkflow#role_arn}.

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.code"></a>

```typescript
public readonly code: MwaaserverlessWorkflowCode;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

The location of code artifacts in Amazon S3 for the workflow.

Modeled as a single-member container so it stays extensible to future artifact types (e.g. OCI images).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#code MwaaserverlessWorkflow#code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#description MwaaserverlessWorkflow#description}.

---

##### `encryptionConfiguration`<sup>Optional</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: MwaaserverlessWorkflowEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#encryption_configuration MwaaserverlessWorkflow#encryption_configuration}.

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: MwaaserverlessWorkflowLoggingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#logging_configuration MwaaserverlessWorkflow#logging_configuration}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#name MwaaserverlessWorkflow#name}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: MwaaserverlessWorkflowNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#network_configuration MwaaserverlessWorkflow#network_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of key-value pairs to be applied as tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#tags MwaaserverlessWorkflow#tags}

---

##### `triggerMode`<sup>Optional</sup> <a name="triggerMode" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowConfig.property.triggerMode"></a>

```typescript
public readonly triggerMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#trigger_mode MwaaserverlessWorkflow#trigger_mode}.

---

### MwaaserverlessWorkflowDefinitionS3Location <a name="MwaaserverlessWorkflowDefinitionS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowDefinitionS3Location: mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey">objectKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#bucket MwaaserverlessWorkflow#bucket}.

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#object_key MwaaserverlessWorkflow#object_key}.

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#version_id MwaaserverlessWorkflow#version_id}.

---

### MwaaserverlessWorkflowEncryptionConfiguration <a name="MwaaserverlessWorkflowEncryptionConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowEncryptionConfiguration: mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}. |

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#kms_key_id MwaaserverlessWorkflow#kms_key_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#type MwaaserverlessWorkflow#type}.

---

### MwaaserverlessWorkflowLoggingConfiguration <a name="MwaaserverlessWorkflowLoggingConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowLoggingConfiguration: mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName">logGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}. |

---

##### `logGroupName`<sup>Optional</sup> <a name="logGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#log_group_name MwaaserverlessWorkflow#log_group_name}.

---

### MwaaserverlessWorkflowNetworkConfiguration <a name="MwaaserverlessWorkflowNetworkConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowNetworkConfiguration: mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#security_group_ids MwaaserverlessWorkflow#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/mwaaserverless_workflow#subnet_ids MwaaserverlessWorkflow#subnet_ids}.

---

### MwaaserverlessWorkflowScheduleConfiguration <a name="MwaaserverlessWorkflowScheduleConfiguration" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

const mwaaserverlessWorkflowScheduleConfiguration: mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### MwaaserverlessWorkflowCodeOutputReference <a name="MwaaserverlessWorkflowCodeOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location">putS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resetS3Location">resetS3Location</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Location` <a name="putS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location"></a>

```typescript
public putS3Location(value: MwaaserverlessWorkflowCodeS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

---

##### `resetS3Location` <a name="resetS3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.resetS3Location"></a>

```typescript
public resetS3Location(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3Location">s3Location</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference">MwaaserverlessWorkflowCodeS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3LocationInput">s3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Location`<sup>Required</sup> <a name="s3Location" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3Location"></a>

```typescript
public readonly s3Location: MwaaserverlessWorkflowCodeS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference">MwaaserverlessWorkflowCodeS3LocationOutputReference</a>

---

##### `s3LocationInput`<sup>Optional</sup> <a name="s3LocationInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.s3LocationInput"></a>

```typescript
public readonly s3LocationInput: IResolvable | MwaaserverlessWorkflowCodeS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwaaserverlessWorkflowCode;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCode">MwaaserverlessWorkflowCode</a>

---


### MwaaserverlessWorkflowCodeS3LocationOutputReference <a name="MwaaserverlessWorkflowCodeS3LocationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetObjectKey">resetObjectKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetObjectKey` <a name="resetObjectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetObjectKey"></a>

```typescript
public resetObjectKey(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.resetVersionId"></a>

```typescript
public resetVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKeyInput"></a>

```typescript
public readonly objectKeyInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwaaserverlessWorkflowCodeS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowCodeS3Location">MwaaserverlessWorkflowCodeS3Location</a>

---


### MwaaserverlessWorkflowDefinitionS3LocationOutputReference <a name="MwaaserverlessWorkflowDefinitionS3LocationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId">resetVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.resetVersionId"></a>

```typescript
public resetVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKeyInput"></a>

```typescript
public readonly objectKeyInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.objectKey"></a>

```typescript
public readonly objectKey: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwaaserverlessWorkflowDefinitionS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowDefinitionS3Location">MwaaserverlessWorkflowDefinitionS3Location</a>

---


### MwaaserverlessWorkflowEncryptionConfigurationOutputReference <a name="MwaaserverlessWorkflowEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwaaserverlessWorkflowEncryptionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowEncryptionConfiguration">MwaaserverlessWorkflowEncryptionConfiguration</a>

---


### MwaaserverlessWorkflowLoggingConfigurationOutputReference <a name="MwaaserverlessWorkflowLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName">resetLogGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroupName` <a name="resetLogGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.resetLogGroupName"></a>

```typescript
public resetLogGroupName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput">logGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNameInput`<sup>Optional</sup> <a name="logGroupNameInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupNameInput"></a>

```typescript
public readonly logGroupNameInput: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwaaserverlessWorkflowLoggingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowLoggingConfiguration">MwaaserverlessWorkflowLoggingConfiguration</a>

---


### MwaaserverlessWorkflowNetworkConfigurationOutputReference <a name="MwaaserverlessWorkflowNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MwaaserverlessWorkflowNetworkConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowNetworkConfiguration">MwaaserverlessWorkflowNetworkConfiguration</a>

---


### MwaaserverlessWorkflowScheduleConfigurationOutputReference <a name="MwaaserverlessWorkflowScheduleConfigurationOutputReference" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer"></a>

```typescript
import { mwaaserverlessWorkflow } from '@cdktn/provider-awscc'

new mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression">cronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpression`<sup>Required</sup> <a name="cronExpression" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.cronExpression"></a>

```typescript
public readonly cronExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MwaaserverlessWorkflowScheduleConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.mwaaserverlessWorkflow.MwaaserverlessWorkflowScheduleConfiguration">MwaaserverlessWorkflowScheduleConfiguration</a>

---



