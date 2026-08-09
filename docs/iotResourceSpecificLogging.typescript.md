# `iotResourceSpecificLogging` Submodule <a name="`iotResourceSpecificLogging` Submodule" id="@cdktn/provider-awscc.iotResourceSpecificLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotResourceSpecificLogging <a name="IotResourceSpecificLogging" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_resource_specific_logging awscc_iot_resource_specific_logging}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.Initializer"></a>

```typescript
import { iotResourceSpecificLogging } from '@cdktn/provider-awscc'

new iotResourceSpecificLogging.IotResourceSpecificLogging(scope: Construct, id: string, config: IotResourceSpecificLoggingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig">IotResourceSpecificLoggingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig">IotResourceSpecificLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotResourceSpecificLogging resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isConstruct"></a>

```typescript
import { iotResourceSpecificLogging } from '@cdktn/provider-awscc'

iotResourceSpecificLogging.IotResourceSpecificLogging.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformElement"></a>

```typescript
import { iotResourceSpecificLogging } from '@cdktn/provider-awscc'

iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformResource"></a>

```typescript
import { iotResourceSpecificLogging } from '@cdktn/provider-awscc'

iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.generateConfigForImport"></a>

```typescript
import { iotResourceSpecificLogging } from '@cdktn/provider-awscc'

iotResourceSpecificLogging.IotResourceSpecificLogging.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotResourceSpecificLogging resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotResourceSpecificLogging to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotResourceSpecificLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_resource_specific_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotResourceSpecificLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetNameInput">targetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetName">targetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `targetNameInput`<sup>Optional</sup> <a name="targetNameInput" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetNameInput"></a>

```typescript
public readonly targetNameInput: string;
```

- *Type:* string

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLogging.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotResourceSpecificLoggingConfig <a name="IotResourceSpecificLoggingConfig" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.Initializer"></a>

```typescript
import { iotResourceSpecificLogging } from '@cdktn/provider-awscc'

const iotResourceSpecificLoggingConfig: iotResourceSpecificLogging.IotResourceSpecificLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.logLevel">logLevel</a></code> | <code>string</code> | The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.targetName">targetName</a></code> | <code>string</code> | The target name. |
| <code><a href="#@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.targetType">targetType</a></code> | <code>string</code> | The target type. Value must be THING_GROUP, CLIENT_ID, SOURCE_IP, PRINCIPAL_ID, or EVENT_TYPE. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_resource_specific_logging#log_level IotResourceSpecificLogging#log_level}

---

##### `targetName`<sup>Required</sup> <a name="targetName" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.targetName"></a>

```typescript
public readonly targetName: string;
```

- *Type:* string

The target name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_resource_specific_logging#target_name IotResourceSpecificLogging#target_name}

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.iotResourceSpecificLogging.IotResourceSpecificLoggingConfig.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

The target type. Value must be THING_GROUP, CLIENT_ID, SOURCE_IP, PRINCIPAL_ID, or EVENT_TYPE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_resource_specific_logging#target_type IotResourceSpecificLogging#target_type}

---



