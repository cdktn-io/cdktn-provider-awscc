# `appstreamEntitlement` Submodule <a name="`appstreamEntitlement` Submodule" id="@cdktn/provider-awscc.appstreamEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamEntitlement <a name="AppstreamEntitlement" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement awscc_appstream_entitlement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.Initializer"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

new appstreamEntitlement.AppstreamEntitlement(scope: Construct, id: string, config: AppstreamEntitlementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig">AppstreamEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig">AppstreamEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.putAttributes"></a>

```typescript
public putAttributes(value: IResolvable | AppstreamEntitlementAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.putAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamEntitlement resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isConstruct"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

appstreamEntitlement.AppstreamEntitlement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isTerraformElement"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

appstreamEntitlement.AppstreamEntitlement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isTerraformResource"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

appstreamEntitlement.AppstreamEntitlement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.generateConfigForImport"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

appstreamEntitlement.AppstreamEntitlement.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamEntitlement resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList">AppstreamEntitlementAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.appVisibilityInput">appVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.stackNameInput">stackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.appVisibility">appVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.stackName">stackName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.attributes"></a>

```typescript
public readonly attributes: AppstreamEntitlementAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList">AppstreamEntitlementAttributesList</a>

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `appVisibilityInput`<sup>Optional</sup> <a name="appVisibilityInput" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.appVisibilityInput"></a>

```typescript
public readonly appVisibilityInput: string;
```

- *Type:* string

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | AppstreamEntitlementAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.stackNameInput"></a>

```typescript
public readonly stackNameInput: string;
```

- *Type:* string

---

##### `appVisibility`<sup>Required</sup> <a name="appVisibility" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.appVisibility"></a>

```typescript
public readonly appVisibility: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamEntitlementAttributes <a name="AppstreamEntitlementAttributes" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes.Initializer"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

const appstreamEntitlementAttributes: appstreamEntitlement.AppstreamEntitlementAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#name AppstreamEntitlement#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#value AppstreamEntitlement#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#name AppstreamEntitlement#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#value AppstreamEntitlement#value}.

---

### AppstreamEntitlementConfig <a name="AppstreamEntitlementConfig" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.Initializer"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

const appstreamEntitlementConfig: appstreamEntitlement.AppstreamEntitlementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.appVisibility">appVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#app_visibility AppstreamEntitlement#app_visibility}. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.attributes">attributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#attributes AppstreamEntitlement#attributes}. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#name AppstreamEntitlement#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.stackName">stackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#stack_name AppstreamEntitlement#stack_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#description AppstreamEntitlement#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `appVisibility`<sup>Required</sup> <a name="appVisibility" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.appVisibility"></a>

```typescript
public readonly appVisibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#app_visibility AppstreamEntitlement#app_visibility}.

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.attributes"></a>

```typescript
public readonly attributes: IResolvable | AppstreamEntitlementAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#attributes AppstreamEntitlement#attributes}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#name AppstreamEntitlement#name}.

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#stack_name AppstreamEntitlement#stack_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_entitlement#description AppstreamEntitlement#description}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamEntitlementAttributesList <a name="AppstreamEntitlementAttributesList" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.Initializer"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

new appstreamEntitlement.AppstreamEntitlementAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.get"></a>

```typescript
public get(index: number): AppstreamEntitlementAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamEntitlementAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>[]

---


### AppstreamEntitlementAttributesOutputReference <a name="AppstreamEntitlementAttributesOutputReference" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer"></a>

```typescript
import { appstreamEntitlement } from '@cdktn/provider-awscc'

new appstreamEntitlement.AppstreamEntitlementAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamEntitlementAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamEntitlement.AppstreamEntitlementAttributes">AppstreamEntitlementAttributes</a>

---



