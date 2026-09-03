# `logsDelivery` Submodule <a name="`logsDelivery` Submodule" id="@cdktn/provider-awscc.logsDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogsDelivery <a name="LogsDelivery" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery awscc_logs_delivery}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

new logsDelivery.LogsDelivery(scope: Construct, id: string, config: LogsDeliveryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig">LogsDeliveryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig">LogsDeliveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetFieldDelimiter">resetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetRecordFields">resetRecordFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3EnableHiveCompatiblePath">resetS3EnableHiveCompatiblePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3SuffixPath">resetS3SuffixPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags"></a>

```typescript
public putTags(value: IResolvable | LogsDeliveryTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

---

##### `resetFieldDelimiter` <a name="resetFieldDelimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetFieldDelimiter"></a>

```typescript
public resetFieldDelimiter(): void
```

##### `resetRecordFields` <a name="resetRecordFields" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetRecordFields"></a>

```typescript
public resetRecordFields(): void
```

##### `resetS3EnableHiveCompatiblePath` <a name="resetS3EnableHiveCompatiblePath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3EnableHiveCompatiblePath"></a>

```typescript
public resetS3EnableHiveCompatiblePath(): void
```

##### `resetS3SuffixPath` <a name="resetS3SuffixPath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetS3SuffixPath"></a>

```typescript
public resetS3SuffixPath(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LogsDelivery resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

logsDelivery.LogsDelivery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

logsDelivery.LogsDelivery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

logsDelivery.LogsDelivery.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

logsDelivery.LogsDelivery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LogsDelivery resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogsDelivery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogsDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LogsDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationType">deliveryDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryId">deliveryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList">LogsDeliveryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArnInput">deliveryDestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceNameInput">deliverySourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiterInput">fieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFieldsInput">recordFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePathInput">s3EnableHiveCompatiblePathInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPathInput">s3SuffixPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArn">deliveryDestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceName">deliverySourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFields">recordFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePath">s3EnableHiveCompatiblePath</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPath">s3SuffixPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deliveryDestinationType`<sup>Required</sup> <a name="deliveryDestinationType" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationType"></a>

```typescript
public readonly deliveryDestinationType: string;
```

- *Type:* string

---

##### `deliveryId`<sup>Required</sup> <a name="deliveryId" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryId"></a>

```typescript
public readonly deliveryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tags"></a>

```typescript
public readonly tags: LogsDeliveryTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList">LogsDeliveryTagsList</a>

---

##### `deliveryDestinationArnInput`<sup>Optional</sup> <a name="deliveryDestinationArnInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArnInput"></a>

```typescript
public readonly deliveryDestinationArnInput: string;
```

- *Type:* string

---

##### `deliverySourceNameInput`<sup>Optional</sup> <a name="deliverySourceNameInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceNameInput"></a>

```typescript
public readonly deliverySourceNameInput: string;
```

- *Type:* string

---

##### `fieldDelimiterInput`<sup>Optional</sup> <a name="fieldDelimiterInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiterInput"></a>

```typescript
public readonly fieldDelimiterInput: string;
```

- *Type:* string

---

##### `recordFieldsInput`<sup>Optional</sup> <a name="recordFieldsInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFieldsInput"></a>

```typescript
public readonly recordFieldsInput: string[];
```

- *Type:* string[]

---

##### `s3EnableHiveCompatiblePathInput`<sup>Optional</sup> <a name="s3EnableHiveCompatiblePathInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePathInput"></a>

```typescript
public readonly s3EnableHiveCompatiblePathInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3SuffixPathInput`<sup>Optional</sup> <a name="s3SuffixPathInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPathInput"></a>

```typescript
public readonly s3SuffixPathInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LogsDeliveryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

---

##### `deliveryDestinationArn`<sup>Required</sup> <a name="deliveryDestinationArn" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliveryDestinationArn"></a>

```typescript
public readonly deliveryDestinationArn: string;
```

- *Type:* string

---

##### `deliverySourceName`<sup>Required</sup> <a name="deliverySourceName" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.deliverySourceName"></a>

```typescript
public readonly deliverySourceName: string;
```

- *Type:* string

---

##### `fieldDelimiter`<sup>Required</sup> <a name="fieldDelimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

---

##### `recordFields`<sup>Required</sup> <a name="recordFields" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.recordFields"></a>

```typescript
public readonly recordFields: string[];
```

- *Type:* string[]

---

##### `s3EnableHiveCompatiblePath`<sup>Required</sup> <a name="s3EnableHiveCompatiblePath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3EnableHiveCompatiblePath"></a>

```typescript
public readonly s3EnableHiveCompatiblePath: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `s3SuffixPath`<sup>Required</sup> <a name="s3SuffixPath" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.s3SuffixPath"></a>

```typescript
public readonly s3SuffixPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.logsDelivery.LogsDelivery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogsDeliveryConfig <a name="LogsDeliveryConfig" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.Initializer"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

const logsDeliveryConfig: logsDelivery.LogsDeliveryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliveryDestinationArn">deliveryDestinationArn</a></code> | <code>string</code> | The ARN of the delivery destination that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliverySourceName">deliverySourceName</a></code> | <code>string</code> | The name of the delivery source that is associated with this delivery. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.fieldDelimiter">fieldDelimiter</a></code> | <code>string</code> | The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.recordFields">recordFields</a></code> | <code>string[]</code> | The list of record fields to be delivered to the destination, in order. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3EnableHiveCompatiblePath">s3EnableHiveCompatiblePath</a></code> | <code>boolean \| cdktn.IResolvable</code> | This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3SuffixPath">s3SuffixPath</a></code> | <code>string</code> | This string allows re-configuring the S3 object prefix to contain either static or variable sections. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]</code> | The tags that have been assigned to this delivery. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deliveryDestinationArn`<sup>Required</sup> <a name="deliveryDestinationArn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliveryDestinationArn"></a>

```typescript
public readonly deliveryDestinationArn: string;
```

- *Type:* string

The ARN of the delivery destination that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#delivery_destination_arn LogsDelivery#delivery_destination_arn}

---

##### `deliverySourceName`<sup>Required</sup> <a name="deliverySourceName" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.deliverySourceName"></a>

```typescript
public readonly deliverySourceName: string;
```

- *Type:* string

The name of the delivery source that is associated with this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#delivery_source_name LogsDelivery#delivery_source_name}

---

##### `fieldDelimiter`<sup>Optional</sup> <a name="fieldDelimiter" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.fieldDelimiter"></a>

```typescript
public readonly fieldDelimiter: string;
```

- *Type:* string

The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#field_delimiter LogsDelivery#field_delimiter}

---

##### `recordFields`<sup>Optional</sup> <a name="recordFields" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.recordFields"></a>

```typescript
public readonly recordFields: string[];
```

- *Type:* string[]

The list of record fields to be delivered to the destination, in order.

If the delivery's log source has mandatory fields, they must be included in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#record_fields LogsDelivery#record_fields}

---

##### `s3EnableHiveCompatiblePath`<sup>Optional</sup> <a name="s3EnableHiveCompatiblePath" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3EnableHiveCompatiblePath"></a>

```typescript
public readonly s3EnableHiveCompatiblePath: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#s3_enable_hive_compatible_path LogsDelivery#s3_enable_hive_compatible_path}

---

##### `s3SuffixPath`<sup>Optional</sup> <a name="s3SuffixPath" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.s3SuffixPath"></a>

```typescript
public readonly s3SuffixPath: string;
```

- *Type:* string

This string allows re-configuring the S3 object prefix to contain either static or variable sections.

The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#s3_suffix_path LogsDelivery#s3_suffix_path}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LogsDeliveryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

The tags that have been assigned to this delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#tags LogsDelivery#tags}

---

### LogsDeliveryTags <a name="LogsDeliveryTags" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.Initializer"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

const logsDeliveryTags: logsDelivery.LogsDeliveryTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. You can specify a value that is 1 to 128 Unicode. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.value">value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag. You can specify a value that is 1 to 128 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#key LogsDelivery#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/logs_delivery#value LogsDelivery#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LogsDeliveryTagsList <a name="LogsDeliveryTagsList" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

new logsDelivery.LogsDeliveryTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get"></a>

```typescript
public get(index: number): LogsDeliveryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsDeliveryTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>[]

---


### LogsDeliveryTagsOutputReference <a name="LogsDeliveryTagsOutputReference" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer"></a>

```typescript
import { logsDelivery } from '@cdktn/provider-awscc'

new logsDelivery.LogsDeliveryTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.logsDelivery.LogsDeliveryTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LogsDeliveryTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.logsDelivery.LogsDeliveryTags">LogsDeliveryTags</a>

---



