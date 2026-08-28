# `ec2RouteServerPeer` Submodule <a name="`ec2RouteServerPeer` Submodule" id="@cdktn/provider-awscc.ec2RouteServerPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2RouteServerPeer <a name="Ec2RouteServerPeer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer awscc_ec2_route_server_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

new ec2RouteServerPeer.Ec2RouteServerPeer(scope: Construct, id: string, config: Ec2RouteServerPeerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig">Ec2RouteServerPeerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig">Ec2RouteServerPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions">putBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBgpOptions` <a name="putBgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions"></a>

```typescript
public putBgpOptions(value: Ec2RouteServerPeerBgpOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2RouteServerPeerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2RouteServerPeer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2RouteServerPeer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2RouteServerPeer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2RouteServerPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2RouteServerPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference">Ec2RouteServerPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniAddress">endpointEniAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniId">endpointEniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerId">routeServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerPeerId">routeServerPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList">Ec2RouteServerPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptionsInput">bgpOptionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddressInput">peerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointIdInput">routeServerEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointId">routeServerEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bgpOptions`<sup>Required</sup> <a name="bgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptions"></a>

```typescript
public readonly bgpOptions: Ec2RouteServerPeerBgpOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference">Ec2RouteServerPeerBgpOptionsOutputReference</a>

---

##### `endpointEniAddress`<sup>Required</sup> <a name="endpointEniAddress" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniAddress"></a>

```typescript
public readonly endpointEniAddress: string;
```

- *Type:* string

---

##### `endpointEniId`<sup>Required</sup> <a name="endpointEniId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniId"></a>

```typescript
public readonly endpointEniId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routeServerId`<sup>Required</sup> <a name="routeServerId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerId"></a>

```typescript
public readonly routeServerId: string;
```

- *Type:* string

---

##### `routeServerPeerId`<sup>Required</sup> <a name="routeServerPeerId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerPeerId"></a>

```typescript
public readonly routeServerPeerId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tags"></a>

```typescript
public readonly tags: Ec2RouteServerPeerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList">Ec2RouteServerPeerTagsList</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `bgpOptionsInput`<sup>Optional</sup> <a name="bgpOptionsInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptionsInput"></a>

```typescript
public readonly bgpOptionsInput: IResolvable | Ec2RouteServerPeerBgpOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---

##### `peerAddressInput`<sup>Optional</sup> <a name="peerAddressInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddressInput"></a>

```typescript
public readonly peerAddressInput: string;
```

- *Type:* string

---

##### `routeServerEndpointIdInput`<sup>Optional</sup> <a name="routeServerEndpointIdInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointIdInput"></a>

```typescript
public readonly routeServerEndpointIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2RouteServerPeerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `routeServerEndpointId`<sup>Required</sup> <a name="routeServerEndpointId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointId"></a>

```typescript
public readonly routeServerEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2RouteServerPeerBgpOptions <a name="Ec2RouteServerPeerBgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.Initializer"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

const ec2RouteServerPeerBgpOptions: ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerAsn">peerAsn</a></code> | <code>number</code> | BGP ASN of the Route Server Peer. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerLivenessDetection">peerLivenessDetection</a></code> | <code>string</code> | BGP Liveness Detection. |

---

##### `peerAsn`<sup>Optional</sup> <a name="peerAsn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

BGP ASN of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_asn Ec2RouteServerPeer#peer_asn}

---

##### `peerLivenessDetection`<sup>Optional</sup> <a name="peerLivenessDetection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerLivenessDetection"></a>

```typescript
public readonly peerLivenessDetection: string;
```

- *Type:* string

BGP Liveness Detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_liveness_detection Ec2RouteServerPeer#peer_liveness_detection}

---

### Ec2RouteServerPeerConfig <a name="Ec2RouteServerPeerConfig" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.Initializer"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

const ec2RouteServerPeerConfig: ec2RouteServerPeer.Ec2RouteServerPeerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.bgpOptions">bgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | BGP Options. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.peerAddress">peerAddress</a></code> | <code>string</code> | IP address of the Route Server Peer. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.routeServerEndpointId">routeServerEndpointId</a></code> | <code>string</code> | Route Server Endpoint ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bgpOptions`<sup>Required</sup> <a name="bgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.bgpOptions"></a>

```typescript
public readonly bgpOptions: Ec2RouteServerPeerBgpOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

BGP Options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#bgp_options Ec2RouteServerPeer#bgp_options}

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

IP address of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#peer_address Ec2RouteServerPeer#peer_address}

---

##### `routeServerEndpointId`<sup>Required</sup> <a name="routeServerEndpointId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.routeServerEndpointId"></a>

```typescript
public readonly routeServerEndpointId: string;
```

- *Type:* string

Route Server Endpoint ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#route_server_endpoint_id Ec2RouteServerPeer#route_server_endpoint_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2RouteServerPeerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#tags Ec2RouteServerPeer#tags}

---

### Ec2RouteServerPeerTags <a name="Ec2RouteServerPeerTags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.Initializer"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

const ec2RouteServerPeerTags: ec2RouteServerPeer.Ec2RouteServerPeerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#key Ec2RouteServerPeer#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_route_server_peer#value Ec2RouteServerPeer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2RouteServerPeerBgpOptionsOutputReference <a name="Ec2RouteServerPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

new ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerAsn">resetPeerAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection">resetPeerLivenessDetection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeerAsn` <a name="resetPeerAsn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerAsn"></a>

```typescript
public resetPeerAsn(): void
```

##### `resetPeerLivenessDetection` <a name="resetPeerLivenessDetection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection"></a>

```typescript
public resetPeerLivenessDetection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsnInput">peerAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput">peerLivenessDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsn">peerAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection">peerLivenessDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `peerAsnInput`<sup>Optional</sup> <a name="peerAsnInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```typescript
public readonly peerAsnInput: number;
```

- *Type:* number

---

##### `peerLivenessDetectionInput`<sup>Optional</sup> <a name="peerLivenessDetectionInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput"></a>

```typescript
public readonly peerLivenessDetectionInput: string;
```

- *Type:* string

---

##### `peerAsn`<sup>Required</sup> <a name="peerAsn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsn"></a>

```typescript
public readonly peerAsn: number;
```

- *Type:* number

---

##### `peerLivenessDetection`<sup>Required</sup> <a name="peerLivenessDetection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection"></a>

```typescript
public readonly peerLivenessDetection: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2RouteServerPeerBgpOptions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---


### Ec2RouteServerPeerTagsList <a name="Ec2RouteServerPeerTagsList" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

new ec2RouteServerPeer.Ec2RouteServerPeerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get"></a>

```typescript
public get(index: number): Ec2RouteServerPeerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2RouteServerPeerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

---


### Ec2RouteServerPeerTagsOutputReference <a name="Ec2RouteServerPeerTagsOutputReference" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer"></a>

```typescript
import { ec2RouteServerPeer } from '@cdktn/provider-awscc'

new ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2RouteServerPeerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>

---



