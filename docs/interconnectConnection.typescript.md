# `interconnectConnection` Submodule <a name="`interconnectConnection` Submodule" id="@cdktn/provider-awscc.interconnectConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InterconnectConnection <a name="InterconnectConnection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection awscc_interconnect_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

new interconnectConnection.InterconnectConnection(scope: Construct, id: string, config: InterconnectConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig">InterconnectConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig">InterconnectConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint">putAttachPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount">putRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey">resetActivationKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount">resetRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount">resetRemoteOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttachPoint` <a name="putAttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint"></a>

```typescript
public putAttachPoint(value: InterconnectConnectionAttachPoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putAttachPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---

##### `putRemoteAccount` <a name="putRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount"></a>

```typescript
public putRemoteAccount(value: InterconnectConnectionRemoteAccount): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putRemoteAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags"></a>

```typescript
public putTags(value: IResolvable | InterconnectConnectionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

---

##### `resetActivationKey` <a name="resetActivationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetActivationKey"></a>

```typescript
public resetActivationKey(): void
```

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetBandwidth"></a>

```typescript
public resetBandwidth(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetEnvironmentId"></a>

```typescript
public resetEnvironmentId(): void
```

##### `resetRemoteAccount` <a name="resetRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteAccount"></a>

```typescript
public resetRemoteAccount(): void
```

##### `resetRemoteOwnerAccount` <a name="resetRemoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetRemoteOwnerAccount"></a>

```typescript
public resetRemoteOwnerAccount(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

interconnectConnection.InterconnectConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

interconnectConnection.InterconnectConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

interconnectConnection.InterconnectConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

interconnectConnection.InterconnectConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a InterconnectConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InterconnectConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InterconnectConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InterconnectConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint">attachPoint</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier">billingTier</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName">providerName</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount">remoteAccount</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId">sharedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput">activationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput">attachPointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput">bandwidthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput">remoteAccountInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput">remoteOwnerAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey">activationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth">bandwidth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount">remoteOwnerAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attachPoint`<sup>Required</sup> <a name="attachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPoint"></a>

```typescript
public readonly attachPoint: InterconnectConnectionAttachPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference">InterconnectConnectionAttachPointOutputReference</a>

---

##### `billingTier`<sup>Required</sup> <a name="billingTier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.billingTier"></a>

```typescript
public readonly billingTier: number;
```

- *Type:* number

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.providerName"></a>

```typescript
public readonly providerName: InterconnectConnectionProviderNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference">InterconnectConnectionProviderNameOutputReference</a>

---

##### `remoteAccount`<sup>Required</sup> <a name="remoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccount"></a>

```typescript
public readonly remoteAccount: InterconnectConnectionRemoteAccountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference">InterconnectConnectionRemoteAccountOutputReference</a>

---

##### `sharedId`<sup>Required</sup> <a name="sharedId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.sharedId"></a>

```typescript
public readonly sharedId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tags"></a>

```typescript
public readonly tags: InterconnectConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList">InterconnectConnectionTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `activationKeyInput`<sup>Optional</sup> <a name="activationKeyInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKeyInput"></a>

```typescript
public readonly activationKeyInput: string;
```

- *Type:* string

---

##### `attachPointInput`<sup>Optional</sup> <a name="attachPointInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.attachPointInput"></a>

```typescript
public readonly attachPointInput: IResolvable | InterconnectConnectionAttachPoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidthInput"></a>

```typescript
public readonly bandwidthInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `remoteAccountInput`<sup>Optional</sup> <a name="remoteAccountInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteAccountInput"></a>

```typescript
public readonly remoteAccountInput: IResolvable | InterconnectConnectionRemoteAccount;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---

##### `remoteOwnerAccountInput`<sup>Optional</sup> <a name="remoteOwnerAccountInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccountInput"></a>

```typescript
public readonly remoteOwnerAccountInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | InterconnectConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

---

##### `activationKey`<sup>Required</sup> <a name="activationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `remoteOwnerAccount`<sup>Required</sup> <a name="remoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.remoteOwnerAccount"></a>

```typescript
public readonly remoteOwnerAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InterconnectConnectionAttachPoint <a name="InterconnectConnectionAttachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

const interconnectConnectionAttachPoint: interconnectConnection.InterconnectConnectionAttachPoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn">arn</a></code> | <code>string</code> | The ARN of the resource to attach to. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway">directConnectGateway</a></code> | <code>string</code> | The ID of the Direct Connect Gateway to attach to. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of the resource to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#arn InterconnectConnection#arn}

---

##### `directConnectGateway`<sup>Optional</sup> <a name="directConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint.property.directConnectGateway"></a>

```typescript
public readonly directConnectGateway: string;
```

- *Type:* string

The ID of the Direct Connect Gateway to attach to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#direct_connect_gateway InterconnectConnection#direct_connect_gateway}

---

### InterconnectConnectionConfig <a name="InterconnectConnectionConfig" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

const interconnectConnectionConfig: interconnectConnection.InterconnectConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint">attachPoint</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | The logical attachment point in your AWS network where the managed connection will be connected. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey">activationKey</a></code> | <code>string</code> | The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth">bandwidth</a></code> | <code>string</code> | The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description">description</a></code> | <code>string</code> | A description of the connection. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId">environmentId</a></code> | <code>string</code> | The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount">remoteAccount</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount">remoteOwnerAccount</a></code> | <code>string</code> | Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attachPoint`<sup>Required</sup> <a name="attachPoint" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.attachPoint"></a>

```typescript
public readonly attachPoint: InterconnectConnectionAttachPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

The logical attachment point in your AWS network where the managed connection will be connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#attach_point InterconnectConnection#attach_point}

---

##### `activationKey`<sup>Optional</sup> <a name="activationKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.activationKey"></a>

```typescript
public readonly activationKey: string;
```

- *Type:* string

The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#activation_key InterconnectConnection#activation_key}

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.bandwidth"></a>

```typescript
public readonly bandwidth: string;
```

- *Type:* string

The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#bandwidth InterconnectConnection#bandwidth}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#description InterconnectConnection#description}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#environment_id InterconnectConnection#environment_id}

---

##### `remoteAccount`<sup>Optional</sup> <a name="remoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteAccount"></a>

```typescript
public readonly remoteAccount: InterconnectConnectionRemoteAccount;
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#remote_account InterconnectConnection#remote_account}

---

##### `remoteOwnerAccount`<sup>Optional</sup> <a name="remoteOwnerAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.remoteOwnerAccount"></a>

```typescript
public readonly remoteOwnerAccount: string;
```

- *Type:* string

Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#remote_owner_account InterconnectConnection#remote_owner_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | InterconnectConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#tags InterconnectConnection#tags}

---

### InterconnectConnectionProviderName <a name="InterconnectConnectionProviderName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

const interconnectConnectionProviderName: interconnectConnection.InterconnectConnectionProviderName = { ... }
```


### InterconnectConnectionRemoteAccount <a name="InterconnectConnectionRemoteAccount" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

const interconnectConnectionRemoteAccount: interconnectConnection.InterconnectConnectionRemoteAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier">identifier</a></code> | <code>string</code> | The identifier of the remote account. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The identifier of the remote account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#identifier InterconnectConnection#identifier}

---

### InterconnectConnectionTags <a name="InterconnectConnectionTags" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

const interconnectConnectionTags: interconnectConnection.InterconnectConnectionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#key InterconnectConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/interconnect_connection#value InterconnectConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### InterconnectConnectionAttachPointOutputReference <a name="InterconnectConnectionAttachPointOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

new interconnectConnection.InterconnectConnectionAttachPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway">resetDirectConnectGateway</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetDirectConnectGateway` <a name="resetDirectConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.resetDirectConnectGateway"></a>

```typescript
public resetDirectConnectGateway(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput">directConnectGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway">directConnectGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `directConnectGatewayInput`<sup>Optional</sup> <a name="directConnectGatewayInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGatewayInput"></a>

```typescript
public readonly directConnectGatewayInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `directConnectGateway`<sup>Required</sup> <a name="directConnectGateway" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.directConnectGateway"></a>

```typescript
public readonly directConnectGateway: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InterconnectConnectionAttachPoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionAttachPoint">InterconnectConnectionAttachPoint</a>

---


### InterconnectConnectionProviderNameOutputReference <a name="InterconnectConnectionProviderNameOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

new interconnectConnection.InterconnectConnectionProviderNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider">cloudServiceProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider">lastMileProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudServiceProvider`<sup>Required</sup> <a name="cloudServiceProvider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.cloudServiceProvider"></a>

```typescript
public readonly cloudServiceProvider: string;
```

- *Type:* string

---

##### `lastMileProvider`<sup>Required</sup> <a name="lastMileProvider" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.lastMileProvider"></a>

```typescript
public readonly lastMileProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InterconnectConnectionProviderName;
```

- *Type:* <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionProviderName">InterconnectConnectionProviderName</a>

---


### InterconnectConnectionRemoteAccountOutputReference <a name="InterconnectConnectionRemoteAccountOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

new interconnectConnection.InterconnectConnectionRemoteAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InterconnectConnectionRemoteAccount;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionRemoteAccount">InterconnectConnectionRemoteAccount</a>

---


### InterconnectConnectionTagsList <a name="InterconnectConnectionTagsList" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

new interconnectConnection.InterconnectConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get"></a>

```typescript
public get(index: number): InterconnectConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InterconnectConnectionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>[]

---


### InterconnectConnectionTagsOutputReference <a name="InterconnectConnectionTagsOutputReference" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer"></a>

```typescript
import { interconnectConnection } from '@cdktn/provider-awscc'

new interconnectConnection.InterconnectConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InterconnectConnectionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.interconnectConnection.InterconnectConnectionTags">InterconnectConnectionTags</a>

---



