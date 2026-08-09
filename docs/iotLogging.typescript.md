# `iotLogging` Submodule <a name="`iotLogging` Submodule" id="@cdktn/provider-awscc.iotLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotLogging <a name="IotLogging" id="@cdktn/provider-awscc.iotLogging.IotLogging"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging awscc_iot_logging}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotLogging.IotLogging.Initializer"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

new iotLogging.IotLogging(scope: Construct, id: string, config: IotLoggingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig">IotLoggingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotLogging.IotLogging.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotLogging.IotLogging.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotLogging.IotLogging.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig">IotLoggingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.putEventConfigurations">putEventConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.resetEventConfigurations">resetEventConfigurations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotLogging.IotLogging.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotLogging.IotLogging.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotLogging.IotLogging.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotLogging.IotLogging.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotLogging.IotLogging.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotLogging.IotLogging.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotLogging.IotLogging.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotLogging.IotLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotLogging.IotLogging.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotLogging.IotLogging.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotLogging.IotLogging.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotLogging.IotLogging.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotLogging.IotLogging.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotLogging.IotLogging.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotLogging.IotLogging.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotLogging.IotLogging.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotLogging.IotLogging.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotLogging.IotLogging.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotLogging.IotLogging.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotLogging.IotLogging.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotLogging.IotLogging.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotLogging.IotLogging.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotLogging.IotLogging.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotLogging.IotLogging.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotLogging.IotLogging.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventConfigurations` <a name="putEventConfigurations" id="@cdktn/provider-awscc.iotLogging.IotLogging.putEventConfigurations"></a>

```typescript
public putEventConfigurations(value: IResolvable | IotLoggingEventConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotLogging.IotLogging.putEventConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>[]

---

##### `resetEventConfigurations` <a name="resetEventConfigurations" id="@cdktn/provider-awscc.iotLogging.IotLogging.resetEventConfigurations"></a>

```typescript
public resetEventConfigurations(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotLogging resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotLogging.IotLogging.isConstruct"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

iotLogging.IotLogging.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotLogging.IotLogging.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotLogging.IotLogging.isTerraformElement"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

iotLogging.IotLogging.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotLogging.IotLogging.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotLogging.IotLogging.isTerraformResource"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

iotLogging.IotLogging.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotLogging.IotLogging.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotLogging.IotLogging.generateConfigForImport"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

iotLogging.IotLogging.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotLogging resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotLogging.IotLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotLogging.IotLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotLogging to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotLogging.IotLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotLogging.IotLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.eventConfigurations">eventConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList">IotLoggingEventConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.defaultLogLevelInput">defaultLogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.eventConfigurationsInput">eventConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.defaultLogLevel">defaultLogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `eventConfigurations`<sup>Required</sup> <a name="eventConfigurations" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.eventConfigurations"></a>

```typescript
public readonly eventConfigurations: IotLoggingEventConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList">IotLoggingEventConfigurationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `defaultLogLevelInput`<sup>Optional</sup> <a name="defaultLogLevelInput" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.defaultLogLevelInput"></a>

```typescript
public readonly defaultLogLevelInput: string;
```

- *Type:* string

---

##### `eventConfigurationsInput`<sup>Optional</sup> <a name="eventConfigurationsInput" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.eventConfigurationsInput"></a>

```typescript
public readonly eventConfigurationsInput: IResolvable | IotLoggingEventConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `defaultLogLevel`<sup>Required</sup> <a name="defaultLogLevel" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.defaultLogLevel"></a>

```typescript
public readonly defaultLogLevel: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLogging.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotLogging.IotLogging.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotLoggingConfig <a name="IotLoggingConfig" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.Initializer"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

const iotLoggingConfig: iotLogging.IotLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.accountId">accountId</a></code> | <code>string</code> | Your 12-digit account ID (used as the primary identifier for the CloudFormation resource). |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.defaultLogLevel">defaultLogLevel</a></code> | <code>string</code> | The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that allows IoT to write to Cloudwatch logs. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.eventConfigurations">eventConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>[]</code> | Configurations for event-based logging that specifies which event types to log and their logging settings. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#account_id IotLogging#account_id}

---

##### `defaultLogLevel`<sup>Required</sup> <a name="defaultLogLevel" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.defaultLogLevel"></a>

```typescript
public readonly defaultLogLevel: string;
```

- *Type:* string

The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#default_log_level IotLogging#default_log_level}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that allows IoT to write to Cloudwatch logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#role_arn IotLogging#role_arn}

---

##### `eventConfigurations`<sup>Optional</sup> <a name="eventConfigurations" id="@cdktn/provider-awscc.iotLogging.IotLoggingConfig.property.eventConfigurations"></a>

```typescript
public readonly eventConfigurations: IResolvable | IotLoggingEventConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>[]

Configurations for event-based logging that specifies which event types to log and their logging settings.

Overrides account-level logging for the specified event

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#event_configurations IotLogging#event_configurations}

---

### IotLoggingEventConfigurations <a name="IotLoggingEventConfigurations" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations.Initializer"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

const iotLoggingEventConfigurations: iotLogging.IotLoggingEventConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations.property.eventType">eventType</a></code> | <code>string</code> | The type of event to log. These include event types like Connect, Publish, and Disconnect. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations.property.logDestination">logDestination</a></code> | <code>string</code> | CloudWatch Log Group for event-based logging. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations.property.logLevel">logLevel</a></code> | <code>string</code> | The logging level for the specified event type. Determines the verbosity of log messages generated for this event type. |

---

##### `eventType`<sup>Optional</sup> <a name="eventType" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

The type of event to log. These include event types like Connect, Publish, and Disconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#event_type IotLogging#event_type}

---

##### `logDestination`<sup>Optional</sup> <a name="logDestination" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

CloudWatch Log Group for event-based logging.

Specifies where log events should be sent. The log destination for event-based logging overrides default Log Group for the specified event type and applies to all resources associated with that event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#log_destination IotLogging#log_destination}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

The logging level for the specified event type. Determines the verbosity of log messages generated for this event type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iot_logging#log_level IotLogging#log_level}

---

## Classes <a name="Classes" id="Classes"></a>

### IotLoggingEventConfigurationsList <a name="IotLoggingEventConfigurationsList" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.Initializer"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

new iotLogging.IotLoggingEventConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.get"></a>

```typescript
public get(index: number): IotLoggingEventConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotLoggingEventConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>[]

---


### IotLoggingEventConfigurationsOutputReference <a name="IotLoggingEventConfigurationsOutputReference" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer"></a>

```typescript
import { iotLogging } from '@cdktn/provider-awscc'

new iotLogging.IotLoggingEventConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resetEventType">resetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resetLogDestination">resetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEventType` <a name="resetEventType" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resetEventType"></a>

```typescript
public resetEventType(): void
```

##### `resetLogDestination` <a name="resetLogDestination" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resetLogDestination"></a>

```typescript
public resetLogDestination(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logDestinationInput">logDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logDestination">logDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `logDestinationInput`<sup>Optional</sup> <a name="logDestinationInput" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logDestinationInput"></a>

```typescript
public readonly logDestinationInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `logDestination`<sup>Required</sup> <a name="logDestination" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logDestination"></a>

```typescript
public readonly logDestination: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotLoggingEventConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotLogging.IotLoggingEventConfigurations">IotLoggingEventConfigurations</a>

---



