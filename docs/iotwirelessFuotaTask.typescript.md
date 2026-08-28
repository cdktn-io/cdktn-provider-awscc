# `iotwirelessFuotaTask` Submodule <a name="`iotwirelessFuotaTask` Submodule" id="@cdktn/provider-awscc.iotwirelessFuotaTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessFuotaTask <a name="IotwirelessFuotaTask" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task awscc_iotwireless_fuota_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

new iotwirelessFuotaTask.IotwirelessFuotaTask(scope: Construct, id: string, config: IotwirelessFuotaTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig">IotwirelessFuotaTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig">IotwirelessFuotaTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup">resetAssociateMulticastGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice">resetAssociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup">resetDisassociateMulticastGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice">resetDisassociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan"></a>

```typescript
public putLoRaWan(value: IotwirelessFuotaTaskLoRaWan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessFuotaTaskTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>[]

---

##### `resetAssociateMulticastGroup` <a name="resetAssociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateMulticastGroup"></a>

```typescript
public resetAssociateMulticastGroup(): void
```

##### `resetAssociateWirelessDevice` <a name="resetAssociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetAssociateWirelessDevice"></a>

```typescript
public resetAssociateWirelessDevice(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisassociateMulticastGroup` <a name="resetDisassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateMulticastGroup"></a>

```typescript
public resetDisassociateMulticastGroup(): void
```

##### `resetDisassociateWirelessDevice` <a name="resetDisassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetDisassociateWirelessDevice"></a>

```typescript
public resetDisassociateWirelessDevice(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessFuotaTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessFuotaTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessFuotaTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessFuotaTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId">fuotaTaskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus">fuotaTaskStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput">associateMulticastGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput">associateWirelessDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput">disassociateMulticastGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput">disassociateWirelessDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput">firmwareUpdateImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput">firmwareUpdateRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput">loRaWanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup">associateMulticastGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice">associateWirelessDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup">disassociateMulticastGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage">firmwareUpdateImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole">firmwareUpdateRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fuotaTaskId`<sup>Required</sup> <a name="fuotaTaskId" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskId"></a>

```typescript
public readonly fuotaTaskId: string;
```

- *Type:* string

---

##### `fuotaTaskStatus`<sup>Required</sup> <a name="fuotaTaskStatus" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.fuotaTaskStatus"></a>

```typescript
public readonly fuotaTaskStatus: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessFuotaTaskLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference">IotwirelessFuotaTaskLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tags"></a>

```typescript
public readonly tags: IotwirelessFuotaTaskTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList">IotwirelessFuotaTaskTagsList</a>

---

##### `associateMulticastGroupInput`<sup>Optional</sup> <a name="associateMulticastGroupInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroupInput"></a>

```typescript
public readonly associateMulticastGroupInput: string;
```

- *Type:* string

---

##### `associateWirelessDeviceInput`<sup>Optional</sup> <a name="associateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDeviceInput"></a>

```typescript
public readonly associateWirelessDeviceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disassociateMulticastGroupInput`<sup>Optional</sup> <a name="disassociateMulticastGroupInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroupInput"></a>

```typescript
public readonly disassociateMulticastGroupInput: string;
```

- *Type:* string

---

##### `disassociateWirelessDeviceInput`<sup>Optional</sup> <a name="disassociateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDeviceInput"></a>

```typescript
public readonly disassociateWirelessDeviceInput: string;
```

- *Type:* string

---

##### `firmwareUpdateImageInput`<sup>Optional</sup> <a name="firmwareUpdateImageInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImageInput"></a>

```typescript
public readonly firmwareUpdateImageInput: string;
```

- *Type:* string

---

##### `firmwareUpdateRoleInput`<sup>Optional</sup> <a name="firmwareUpdateRoleInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRoleInput"></a>

```typescript
public readonly firmwareUpdateRoleInput: string;
```

- *Type:* string

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.loRaWanInput"></a>

```typescript
public readonly loRaWanInput: IResolvable | IotwirelessFuotaTaskLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessFuotaTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>[]

---

##### `associateMulticastGroup`<sup>Required</sup> <a name="associateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateMulticastGroup"></a>

```typescript
public readonly associateMulticastGroup: string;
```

- *Type:* string

---

##### `associateWirelessDevice`<sup>Required</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.associateWirelessDevice"></a>

```typescript
public readonly associateWirelessDevice: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disassociateMulticastGroup`<sup>Required</sup> <a name="disassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateMulticastGroup"></a>

```typescript
public readonly disassociateMulticastGroup: string;
```

- *Type:* string

---

##### `disassociateWirelessDevice`<sup>Required</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.disassociateWirelessDevice"></a>

```typescript
public readonly disassociateWirelessDevice: string;
```

- *Type:* string

---

##### `firmwareUpdateImage`<sup>Required</sup> <a name="firmwareUpdateImage" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateImage"></a>

```typescript
public readonly firmwareUpdateImage: string;
```

- *Type:* string

---

##### `firmwareUpdateRole`<sup>Required</sup> <a name="firmwareUpdateRole" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.firmwareUpdateRole"></a>

```typescript
public readonly firmwareUpdateRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessFuotaTaskConfig <a name="IotwirelessFuotaTaskConfig" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.Initializer"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

const iotwirelessFuotaTaskConfig: iotwirelessFuotaTask.IotwirelessFuotaTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage">firmwareUpdateImage</a></code> | <code>string</code> | FUOTA task firmware update image binary S3 link. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole">firmwareUpdateRole</a></code> | <code>string</code> | FUOTA task firmware IAM role for reading S3. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | FUOTA task LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup">associateMulticastGroup</a></code> | <code>string</code> | Multicast group to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice">associateWirelessDevice</a></code> | <code>string</code> | Wireless device to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description">description</a></code> | <code>string</code> | FUOTA task description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup">disassociateMulticastGroup</a></code> | <code>string</code> | Multicast group to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>string</code> | Wireless device to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name">name</a></code> | <code>string</code> | Name of FUOTA task. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>[]</code> | A list of key-value pairs that contain metadata for the FUOTA task. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `firmwareUpdateImage`<sup>Required</sup> <a name="firmwareUpdateImage" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateImage"></a>

```typescript
public readonly firmwareUpdateImage: string;
```

- *Type:* string

FUOTA task firmware update image binary S3 link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#firmware_update_image IotwirelessFuotaTask#firmware_update_image}

---

##### `firmwareUpdateRole`<sup>Required</sup> <a name="firmwareUpdateRole" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.firmwareUpdateRole"></a>

```typescript
public readonly firmwareUpdateRole: string;
```

- *Type:* string

FUOTA task firmware IAM role for reading S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#firmware_update_role IotwirelessFuotaTask#firmware_update_role}

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessFuotaTaskLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

FUOTA task LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#lo_ra_wan IotwirelessFuotaTask#lo_ra_wan}

---

##### `associateMulticastGroup`<sup>Optional</sup> <a name="associateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateMulticastGroup"></a>

```typescript
public readonly associateMulticastGroup: string;
```

- *Type:* string

Multicast group to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#associate_multicast_group IotwirelessFuotaTask#associate_multicast_group}

---

##### `associateWirelessDevice`<sup>Optional</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.associateWirelessDevice"></a>

```typescript
public readonly associateWirelessDevice: string;
```

- *Type:* string

Wireless device to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#associate_wireless_device IotwirelessFuotaTask#associate_wireless_device}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

FUOTA task description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#description IotwirelessFuotaTask#description}

---

##### `disassociateMulticastGroup`<sup>Optional</sup> <a name="disassociateMulticastGroup" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateMulticastGroup"></a>

```typescript
public readonly disassociateMulticastGroup: string;
```

- *Type:* string

Multicast group to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#disassociate_multicast_group IotwirelessFuotaTask#disassociate_multicast_group}

---

##### `disassociateWirelessDevice`<sup>Optional</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.disassociateWirelessDevice"></a>

```typescript
public readonly disassociateWirelessDevice: string;
```

- *Type:* string

Wireless device to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#disassociate_wireless_device IotwirelessFuotaTask#disassociate_wireless_device}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#name IotwirelessFuotaTask#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessFuotaTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>[]

A list of key-value pairs that contain metadata for the FUOTA task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#tags IotwirelessFuotaTask#tags}

---

### IotwirelessFuotaTaskLoRaWan <a name="IotwirelessFuotaTaskLoRaWan" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.Initializer"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

const iotwirelessFuotaTaskLoRaWan: iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion">rfRegion</a></code> | <code>string</code> | FUOTA task LoRaWAN RF region. |

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan.property.rfRegion"></a>

```typescript
public readonly rfRegion: string;
```

- *Type:* string

FUOTA task LoRaWAN RF region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#rf_region IotwirelessFuotaTask#rf_region}

---

### IotwirelessFuotaTaskTags <a name="IotwirelessFuotaTaskTags" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.Initializer"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

const iotwirelessFuotaTaskTags: iotwirelessFuotaTask.IotwirelessFuotaTaskTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#key IotwirelessFuotaTask#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_fuota_task#value IotwirelessFuotaTask#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessFuotaTaskLoRaWanOutputReference <a name="IotwirelessFuotaTaskLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

new iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput">rfRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion">rfRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `rfRegionInput`<sup>Optional</sup> <a name="rfRegionInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegionInput"></a>

```typescript
public readonly rfRegionInput: string;
```

- *Type:* string

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.rfRegion"></a>

```typescript
public readonly rfRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessFuotaTaskLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskLoRaWan">IotwirelessFuotaTaskLoRaWan</a>

---


### IotwirelessFuotaTaskTagsList <a name="IotwirelessFuotaTaskTagsList" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

new iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get"></a>

```typescript
public get(index: number): IotwirelessFuotaTaskTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessFuotaTaskTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>[]

---


### IotwirelessFuotaTaskTagsOutputReference <a name="IotwirelessFuotaTaskTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessFuotaTask } from '@cdktn/provider-awscc'

new iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessFuotaTaskTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessFuotaTask.IotwirelessFuotaTaskTags">IotwirelessFuotaTaskTags</a>

---



