# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktn/provider-awscc.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation awscc_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperation(scope: Construct, id: string, config: ConnectHoursOfOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations">putChildHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides">putHoursOfOperationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations">putParentHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations">resetChildHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides">resetHoursOfOperationOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations">resetParentHoursOfOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putChildHoursOfOperations` <a name="putChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations"></a>

```typescript
public putChildHoursOfOperations(value: IResolvable | ConnectHoursOfOperationChildHoursOfOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putChildHoursOfOperations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```typescript
public putConfig(value: IResolvable | ConnectHoursOfOperationConfigA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `putHoursOfOperationOverrides` <a name="putHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides"></a>

```typescript
public putHoursOfOperationOverrides(value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putHoursOfOperationOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

---

##### `putParentHoursOfOperations` <a name="putParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations"></a>

```typescript
public putParentHoursOfOperations(value: IResolvable | ConnectHoursOfOperationParentHoursOfOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putParentHoursOfOperations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectHoursOfOperationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

---

##### `resetChildHoursOfOperations` <a name="resetChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetChildHoursOfOperations"></a>

```typescript
public resetChildHoursOfOperations(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHoursOfOperationOverrides` <a name="resetHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetHoursOfOperationOverrides"></a>

```typescript
public resetHoursOfOperationOverrides(): void
```

##### `resetParentHoursOfOperations` <a name="resetParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetParentHoursOfOperations"></a>

```typescript
public resetParentHoursOfOperations(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

connectHoursOfOperation.ConnectHoursOfOperation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectHoursOfOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectHoursOfOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectHoursOfOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectHoursOfOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations">childHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides">hoursOfOperationOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations">parentHoursOfOperations</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput">childHoursOfOperationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput">hoursOfOperationOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput">parentHoursOfOperationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `childHoursOfOperations`<sup>Required</sup> <a name="childHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperations"></a>

```typescript
public readonly childHoursOfOperations: ConnectHoursOfOperationChildHoursOfOperationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList">ConnectHoursOfOperationChildHoursOfOperationsList</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```typescript
public readonly config: ConnectHoursOfOperationConfigAList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

---

##### `hoursOfOperationOverrides`<sup>Required</sup> <a name="hoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverrides"></a>

```typescript
public readonly hoursOfOperationOverrides: ConnectHoursOfOperationHoursOfOperationOverridesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList">ConnectHoursOfOperationHoursOfOperationOverridesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parentHoursOfOperations`<sup>Required</sup> <a name="parentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperations"></a>

```typescript
public readonly parentHoursOfOperations: ConnectHoursOfOperationParentHoursOfOperationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList">ConnectHoursOfOperationParentHoursOfOperationsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```typescript
public readonly tags: ConnectHoursOfOperationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList">ConnectHoursOfOperationTagsList</a>

---

##### `childHoursOfOperationsInput`<sup>Optional</sup> <a name="childHoursOfOperationsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.childHoursOfOperationsInput"></a>

```typescript
public readonly childHoursOfOperationsInput: IResolvable | ConnectHoursOfOperationChildHoursOfOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hoursOfOperationOverridesInput`<sup>Optional</sup> <a name="hoursOfOperationOverridesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationOverridesInput"></a>

```typescript
public readonly hoursOfOperationOverridesInput: IResolvable | ConnectHoursOfOperationHoursOfOperationOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentHoursOfOperationsInput`<sup>Optional</sup> <a name="parentHoursOfOperationsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.parentHoursOfOperationsInput"></a>

```typescript
public readonly parentHoursOfOperationsInput: IResolvable | ConnectHoursOfOperationParentHoursOfOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectHoursOfOperationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationChildHoursOfOperations <a name="ConnectHoursOfOperationChildHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationChildHoursOfOperations: connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id">id</a></code> | <code>string</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name">name</a></code> | <code>string</code> | The name of the hours of operation. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationConfig: connectHoursOfOperation.ConnectHoursOfOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">config</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | Configuration information for the hours of operation: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">name</a></code> | <code>string</code> | The name of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations">childHoursOfOperations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]</code> | List of child hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">description</a></code> | <code>string</code> | The description of the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides">hoursOfOperationOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]</code> | One or more hours of operation overrides assigned to an hour of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations">parentHoursOfOperations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]</code> | List of parent hours of operations. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```typescript
public readonly config: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

Configuration information for the hours of operation: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#instance_arn ConnectHoursOfOperation#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}

---

##### `childHoursOfOperations`<sup>Optional</sup> <a name="childHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.childHoursOfOperations"></a>

```typescript
public readonly childHoursOfOperations: IResolvable | ConnectHoursOfOperationChildHoursOfOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

List of child hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#child_hours_of_operations ConnectHoursOfOperation#child_hours_of_operations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}

---

##### `hoursOfOperationOverrides`<sup>Optional</sup> <a name="hoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.hoursOfOperationOverrides"></a>

```typescript
public readonly hoursOfOperationOverrides: IResolvable | ConnectHoursOfOperationHoursOfOperationOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

One or more hours of operation overrides assigned to an hour of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#hours_of_operation_overrides ConnectHoursOfOperation#hours_of_operation_overrides}

---

##### `parentHoursOfOperations`<sup>Optional</sup> <a name="parentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.parentHoursOfOperations"></a>

```typescript
public readonly parentHoursOfOperations: IResolvable | ConnectHoursOfOperationParentHoursOfOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

List of parent hours of operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#parent_hours_of_operations ConnectHoursOfOperation#parent_hours_of_operations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectHoursOfOperationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationConfigA: connectHoursOfOperation.ConnectHoursOfOperationConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">day</a></code> | <code>string</code> | The day that the hours of operation applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | The end time that your contact center closes. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | The start time that your contact center opens. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

The day that the hours of operation applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

The end time that your contact center closes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

The start time that your contact center opens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationConfigEndTime: connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">hours</a></code> | <code>number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">minutes</a></code> | <code>number</code> | The minutes. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationConfigStartTime: connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">hours</a></code> | <code>number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">minutes</a></code> | <code>number</code> | The minutes. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverrides <a name="ConnectHoursOfOperationHoursOfOperationOverrides" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationHoursOfOperationOverrides: connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom">effectiveFrom</a></code> | <code>string</code> | The date from which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill">effectiveTill</a></code> | <code>string</code> | The date till which the hours of operation override would be effective. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId">hoursOfOperationOverrideId</a></code> | <code>string</code> | The Resource Identifier for the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig">overrideConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]</code> | Configuration information for the hours of operation override: day, start time, and end time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription">overrideDescription</a></code> | <code>string</code> | The description of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName">overrideName</a></code> | <code>string</code> | The name of the hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType">overrideType</a></code> | <code>string</code> | The type of hours of operation override. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig">recurrenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | Configuration for recurring hours of operation overrides. |

---

##### `effectiveFrom`<sup>Optional</sup> <a name="effectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveFrom"></a>

```typescript
public readonly effectiveFrom: string;
```

- *Type:* string

The date from which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#effective_from ConnectHoursOfOperation#effective_from}

---

##### `effectiveTill`<sup>Optional</sup> <a name="effectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.effectiveTill"></a>

```typescript
public readonly effectiveTill: string;
```

- *Type:* string

The date till which the hours of operation override would be effective.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#effective_till ConnectHoursOfOperation#effective_till}

---

##### `hoursOfOperationOverrideId`<sup>Optional</sup> <a name="hoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.hoursOfOperationOverrideId"></a>

```typescript
public readonly hoursOfOperationOverrideId: string;
```

- *Type:* string

The Resource Identifier for the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#hours_of_operation_override_id ConnectHoursOfOperation#hours_of_operation_override_id}

---

##### `overrideConfig`<sup>Optional</sup> <a name="overrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideConfig"></a>

```typescript
public readonly overrideConfig: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

Configuration information for the hours of operation override: day, start time, and end time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#override_config ConnectHoursOfOperation#override_config}

---

##### `overrideDescription`<sup>Optional</sup> <a name="overrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideDescription"></a>

```typescript
public readonly overrideDescription: string;
```

- *Type:* string

The description of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#override_description ConnectHoursOfOperation#override_description}

---

##### `overrideName`<sup>Optional</sup> <a name="overrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideName"></a>

```typescript
public readonly overrideName: string;
```

- *Type:* string

The name of the hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#override_name ConnectHoursOfOperation#override_name}

---

##### `overrideType`<sup>Optional</sup> <a name="overrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.overrideType"></a>

```typescript
public readonly overrideType: string;
```

- *Type:* string

The type of hours of operation override.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#override_type ConnectHoursOfOperation#override_type}

---

##### `recurrenceConfig`<sup>Optional</sup> <a name="recurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides.property.recurrenceConfig"></a>

```typescript
public readonly recurrenceConfig: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

Configuration for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#recurrence_config ConnectHoursOfOperation#recurrence_config}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationHoursOfOperationOverridesOverrideConfig: connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day">day</a></code> | <code>string</code> | The day that the hours of operation override applies to. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | The new end time that your contact center closes for the overriden days. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | The new start time that your contact center opens for the overriden days. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

The day that the hours of operation override applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

The new end time that your contact center closes for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

The new start time that your contact center opens for the overriden days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime: connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours">hours</a></code> | <code>number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes">minutes</a></code> | <code>number</code> | The minutes. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime: connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours">hours</a></code> | <code>number</code> | The hours. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes">minutes</a></code> | <code>number</code> | The minutes. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

The hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

The minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig: connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern">recurrencePattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | Pattern for recurring hours of operation overrides. |

---

##### `recurrencePattern`<sup>Optional</sup> <a name="recurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig.property.recurrencePattern"></a>

```typescript
public readonly recurrencePattern: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

Pattern for recurring hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#recurrence_pattern ConnectHoursOfOperation#recurrence_pattern}

---

### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern: connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth">byMonth</a></code> | <code>number[]</code> | List of months (1-12) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay">byMonthDay</a></code> | <code>number[]</code> | List of month days (-1 to 31) for recurrence pattern. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence">byWeekdayOccurrence</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency">frequency</a></code> | <code>string</code> | The frequency of recurrence for hours of operation overrides. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}. |

---

##### `byMonth`<sup>Optional</sup> <a name="byMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonth"></a>

```typescript
public readonly byMonth: number[];
```

- *Type:* number[]

List of months (1-12) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#by_month ConnectHoursOfOperation#by_month}

---

##### `byMonthDay`<sup>Optional</sup> <a name="byMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byMonthDay"></a>

```typescript
public readonly byMonthDay: number[];
```

- *Type:* number[]

List of month days (-1 to 31) for recurrence pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#by_month_day ConnectHoursOfOperation#by_month_day}

---

##### `byWeekdayOccurrence`<sup>Optional</sup> <a name="byWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.byWeekdayOccurrence"></a>

```typescript
public readonly byWeekdayOccurrence: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#by_weekday_occurrence ConnectHoursOfOperation#by_weekday_occurrence}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

The frequency of recurrence for hours of operation overrides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#frequency ConnectHoursOfOperation#frequency}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#interval ConnectHoursOfOperation#interval}.

---

### ConnectHoursOfOperationParentHoursOfOperations <a name="ConnectHoursOfOperationParentHoursOfOperations" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationParentHoursOfOperations: connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id">id</a></code> | <code>string</code> | The identifier for the hours of operation. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name">name</a></code> | <code>string</code> | The name of the hours of operation. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The identifier for the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the hours of operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}

---

### ConnectHoursOfOperationTags <a name="ConnectHoursOfOperationTags" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

const connectHoursOfOperationTags: connectHoursOfOperation.ConnectHoursOfOperationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#key ConnectHoursOfOperation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/connect_hours_of_operation#value ConnectHoursOfOperation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationChildHoursOfOperationsList <a name="ConnectHoursOfOperationChildHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationChildHoursOfOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationChildHoursOfOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>[]

---


### ConnectHoursOfOperationChildHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationChildHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationChildHoursOfOperations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationChildHoursOfOperations">ConnectHoursOfOperationChildHoursOfOperations</a>

---


### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```typescript
public putEndTime(value: ConnectHoursOfOperationConfigEndTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: ConnectHoursOfOperationConfigStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationConfigEndTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationConfigStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: IResolvable | ConnectHoursOfOperationConfigEndTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: IResolvable | ConnectHoursOfOperationConfigStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationConfigEndTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationConfigStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesList <a name="ConnectHoursOfOperationHoursOfOperationOverridesList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationHoursOfOperationOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>[]

---


### ConnectHoursOfOperationHoursOfOperationOverridesOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig">putOverrideConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig">putRecurrenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom">resetEffectiveFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill">resetEffectiveTill</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId">resetHoursOfOperationOverrideId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig">resetOverrideConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription">resetOverrideDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName">resetOverrideName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType">resetOverrideType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig">resetRecurrenceConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOverrideConfig` <a name="putOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig"></a>

```typescript
public putOverrideConfig(value: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putOverrideConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

---

##### `putRecurrenceConfig` <a name="putRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig"></a>

```typescript
public putRecurrenceConfig(value: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.putRecurrenceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---

##### `resetEffectiveFrom` <a name="resetEffectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveFrom"></a>

```typescript
public resetEffectiveFrom(): void
```

##### `resetEffectiveTill` <a name="resetEffectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetEffectiveTill"></a>

```typescript
public resetEffectiveTill(): void
```

##### `resetHoursOfOperationOverrideId` <a name="resetHoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetHoursOfOperationOverrideId"></a>

```typescript
public resetHoursOfOperationOverrideId(): void
```

##### `resetOverrideConfig` <a name="resetOverrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideConfig"></a>

```typescript
public resetOverrideConfig(): void
```

##### `resetOverrideDescription` <a name="resetOverrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideDescription"></a>

```typescript
public resetOverrideDescription(): void
```

##### `resetOverrideName` <a name="resetOverrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideName"></a>

```typescript
public resetOverrideName(): void
```

##### `resetOverrideType` <a name="resetOverrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetOverrideType"></a>

```typescript
public resetOverrideType(): void
```

##### `resetRecurrenceConfig` <a name="resetRecurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.resetRecurrenceConfig"></a>

```typescript
public resetRecurrenceConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig">overrideConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig">recurrenceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput">effectiveFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput">effectiveTillInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput">hoursOfOperationOverrideIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput">overrideConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput">overrideDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput">overrideNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput">overrideTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput">recurrenceConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom">effectiveFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill">effectiveTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId">hoursOfOperationOverrideId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription">overrideDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName">overrideName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType">overrideType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `overrideConfig`<sup>Required</sup> <a name="overrideConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfig"></a>

```typescript
public readonly overrideConfig: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList</a>

---

##### `recurrenceConfig`<sup>Required</sup> <a name="recurrenceConfig" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfig"></a>

```typescript
public readonly recurrenceConfig: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference</a>

---

##### `effectiveFromInput`<sup>Optional</sup> <a name="effectiveFromInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFromInput"></a>

```typescript
public readonly effectiveFromInput: string;
```

- *Type:* string

---

##### `effectiveTillInput`<sup>Optional</sup> <a name="effectiveTillInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTillInput"></a>

```typescript
public readonly effectiveTillInput: string;
```

- *Type:* string

---

##### `hoursOfOperationOverrideIdInput`<sup>Optional</sup> <a name="hoursOfOperationOverrideIdInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideIdInput"></a>

```typescript
public readonly hoursOfOperationOverrideIdInput: string;
```

- *Type:* string

---

##### `overrideConfigInput`<sup>Optional</sup> <a name="overrideConfigInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideConfigInput"></a>

```typescript
public readonly overrideConfigInput: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

---

##### `overrideDescriptionInput`<sup>Optional</sup> <a name="overrideDescriptionInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescriptionInput"></a>

```typescript
public readonly overrideDescriptionInput: string;
```

- *Type:* string

---

##### `overrideNameInput`<sup>Optional</sup> <a name="overrideNameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideNameInput"></a>

```typescript
public readonly overrideNameInput: string;
```

- *Type:* string

---

##### `overrideTypeInput`<sup>Optional</sup> <a name="overrideTypeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideTypeInput"></a>

```typescript
public readonly overrideTypeInput: string;
```

- *Type:* string

---

##### `recurrenceConfigInput`<sup>Optional</sup> <a name="recurrenceConfigInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.recurrenceConfigInput"></a>

```typescript
public readonly recurrenceConfigInput: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---

##### `effectiveFrom`<sup>Required</sup> <a name="effectiveFrom" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveFrom"></a>

```typescript
public readonly effectiveFrom: string;
```

- *Type:* string

---

##### `effectiveTill`<sup>Required</sup> <a name="effectiveTill" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.effectiveTill"></a>

```typescript
public readonly effectiveTill: string;
```

- *Type:* string

---

##### `hoursOfOperationOverrideId`<sup>Required</sup> <a name="hoursOfOperationOverrideId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.hoursOfOperationOverrideId"></a>

```typescript
public readonly hoursOfOperationOverrideId: string;
```

- *Type:* string

---

##### `overrideDescription`<sup>Required</sup> <a name="overrideDescription" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideDescription"></a>

```typescript
public readonly overrideDescription: string;
```

- *Type:* string

---

##### `overrideName`<sup>Required</sup> <a name="overrideName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideName"></a>

```typescript
public readonly overrideName: string;
```

- *Type:* string

---

##### `overrideType`<sup>Required</sup> <a name="overrideType" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.overrideType"></a>

```typescript
public readonly overrideType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverrides">ConnectHoursOfOperationHoursOfOperationOverrides</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>[]

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime">putStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime"></a>

```typescript
public putEndTime(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---

##### `resetDay` <a name="resetDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetDay"></a>

```typescript
public resetDay(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.resetStartTime"></a>

```typescript
public resetStartTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetHours"></a>

```typescript
public resetHours(): void
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.resetMinutes"></a>

```typescript
public resetMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime">ConnectHoursOfOperationHoursOfOperationOverridesOverrideConfigStartTime</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern">putRecurrencePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern">resetRecurrencePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRecurrencePattern` <a name="putRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern"></a>

```typescript
public putRecurrencePattern(value: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.putRecurrencePattern.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---

##### `resetRecurrencePattern` <a name="resetRecurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.resetRecurrencePattern"></a>

```typescript
public resetRecurrencePattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern">recurrencePattern</a></code> | <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput">recurrencePatternInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recurrencePattern`<sup>Required</sup> <a name="recurrencePattern" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePattern"></a>

```typescript
public readonly recurrencePattern: ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference</a>

---

##### `recurrencePatternInput`<sup>Optional</sup> <a name="recurrencePatternInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.recurrencePatternInput"></a>

```typescript
public readonly recurrencePatternInput: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfig</a>

---


### ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference <a name="ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth">resetByMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay">resetByMonthDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence">resetByWeekdayOccurrence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval">resetInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetByMonth` <a name="resetByMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonth"></a>

```typescript
public resetByMonth(): void
```

##### `resetByMonthDay` <a name="resetByMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByMonthDay"></a>

```typescript
public resetByMonthDay(): void
```

##### `resetByWeekdayOccurrence` <a name="resetByWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetByWeekdayOccurrence"></a>

```typescript
public resetByWeekdayOccurrence(): void
```

##### `resetFrequency` <a name="resetFrequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput">byMonthDayInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput">byMonthInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput">byWeekdayOccurrenceInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput">frequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth">byMonth</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay">byMonthDay</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence">byWeekdayOccurrence</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency">frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `byMonthDayInput`<sup>Optional</sup> <a name="byMonthDayInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDayInput"></a>

```typescript
public readonly byMonthDayInput: number[];
```

- *Type:* number[]

---

##### `byMonthInput`<sup>Optional</sup> <a name="byMonthInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthInput"></a>

```typescript
public readonly byMonthInput: number[];
```

- *Type:* number[]

---

##### `byWeekdayOccurrenceInput`<sup>Optional</sup> <a name="byWeekdayOccurrenceInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrenceInput"></a>

```typescript
public readonly byWeekdayOccurrenceInput: number[];
```

- *Type:* number[]

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `byMonth`<sup>Required</sup> <a name="byMonth" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonth"></a>

```typescript
public readonly byMonth: number[];
```

- *Type:* number[]

---

##### `byMonthDay`<sup>Required</sup> <a name="byMonthDay" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byMonthDay"></a>

```typescript
public readonly byMonthDay: number[];
```

- *Type:* number[]

---

##### `byWeekdayOccurrence`<sup>Required</sup> <a name="byWeekdayOccurrence" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.byWeekdayOccurrence"></a>

```typescript
public readonly byWeekdayOccurrence: number[];
```

- *Type:* number[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.frequency"></a>

```typescript
public readonly frequency: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePatternOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern">ConnectHoursOfOperationHoursOfOperationOverridesRecurrenceConfigRecurrencePattern</a>

---


### ConnectHoursOfOperationParentHoursOfOperationsList <a name="ConnectHoursOfOperationParentHoursOfOperationsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationParentHoursOfOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationParentHoursOfOperations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>[]

---


### ConnectHoursOfOperationParentHoursOfOperationsOutputReference <a name="ConnectHoursOfOperationParentHoursOfOperationsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationParentHoursOfOperations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationParentHoursOfOperations">ConnectHoursOfOperationParentHoursOfOperations</a>

---


### ConnectHoursOfOperationTagsList <a name="ConnectHoursOfOperationTagsList" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>[]

---


### ConnectHoursOfOperationTagsOutputReference <a name="ConnectHoursOfOperationTagsOutputReference" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktn/provider-awscc'

new connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectHoursOfOperation.ConnectHoursOfOperationTags">ConnectHoursOfOperationTags</a>

---



