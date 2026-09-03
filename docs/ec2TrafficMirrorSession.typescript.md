# `ec2TrafficMirrorSession` Submodule <a name="`ec2TrafficMirrorSession` Submodule" id="@cdktn/provider-awscc.ec2TrafficMirrorSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorSession <a name="Ec2TrafficMirrorSession" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session awscc_ec2_traffic_mirror_session}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

new ec2TrafficMirrorSession.Ec2TrafficMirrorSession(scope: Construct, id: string, config: Ec2TrafficMirrorSessionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig">Ec2TrafficMirrorSessionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig">Ec2TrafficMirrorSessionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOwnerId">resetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength">resetPacketLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId">resetVirtualNetworkId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2TrafficMirrorSessionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetOwnerId"></a>

```typescript
public resetOwnerId(): void
```

##### `resetPacketLength` <a name="resetPacketLength" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetPacketLength"></a>

```typescript
public resetPacketLength(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVirtualNetworkId` <a name="resetVirtualNetworkId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.resetVirtualNetworkId"></a>

```typescript
public resetVirtualNetworkId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TrafficMirrorSession resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.generateConfigForImport"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

ec2TrafficMirrorSession.Ec2TrafficMirrorSession.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2TrafficMirrorSession resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TrafficMirrorSession to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TrafficMirrorSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TrafficMirrorSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList">Ec2TrafficMirrorSessionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorSessionId">trafficMirrorSessionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerIdInput">ownerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput">packetLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput">sessionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput">trafficMirrorFilterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput">trafficMirrorTargetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput">virtualNetworkIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength">packetLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber">sessionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId">trafficMirrorTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId">virtualNetworkId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tags"></a>

```typescript
public readonly tags: Ec2TrafficMirrorSessionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList">Ec2TrafficMirrorSessionTagsList</a>

---

##### `trafficMirrorSessionId`<sup>Required</sup> <a name="trafficMirrorSessionId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorSessionId"></a>

```typescript
public readonly trafficMirrorSessionId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerIdInput"></a>

```typescript
public readonly ownerIdInput: string;
```

- *Type:* string

---

##### `packetLengthInput`<sup>Optional</sup> <a name="packetLengthInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLengthInput"></a>

```typescript
public readonly packetLengthInput: number;
```

- *Type:* number

---

##### `sessionNumberInput`<sup>Optional</sup> <a name="sessionNumberInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumberInput"></a>

```typescript
public readonly sessionNumberInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2TrafficMirrorSessionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>[]

---

##### `trafficMirrorFilterIdInput`<sup>Optional</sup> <a name="trafficMirrorFilterIdInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterIdInput"></a>

```typescript
public readonly trafficMirrorFilterIdInput: string;
```

- *Type:* string

---

##### `trafficMirrorTargetIdInput`<sup>Optional</sup> <a name="trafficMirrorTargetIdInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetIdInput"></a>

```typescript
public readonly trafficMirrorTargetIdInput: string;
```

- *Type:* string

---

##### `virtualNetworkIdInput`<sup>Optional</sup> <a name="virtualNetworkIdInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkIdInput"></a>

```typescript
public readonly virtualNetworkIdInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `packetLength`<sup>Required</sup> <a name="packetLength" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.packetLength"></a>

```typescript
public readonly packetLength: number;
```

- *Type:* number

---

##### `sessionNumber`<sup>Required</sup> <a name="sessionNumber" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.sessionNumber"></a>

```typescript
public readonly sessionNumber: number;
```

- *Type:* number

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorFilterId"></a>

```typescript
public readonly trafficMirrorFilterId: string;
```

- *Type:* string

---

##### `trafficMirrorTargetId`<sup>Required</sup> <a name="trafficMirrorTargetId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.trafficMirrorTargetId"></a>

```typescript
public readonly trafficMirrorTargetId: string;
```

- *Type:* string

---

##### `virtualNetworkId`<sup>Required</sup> <a name="virtualNetworkId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSession.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorSessionConfig <a name="Ec2TrafficMirrorSessionConfig" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.Initializer"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

const ec2TrafficMirrorSessionConfig: ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | The ID of the source network interface. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber">sessionNumber</a></code> | <code>number</code> | The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId">trafficMirrorFilterId</a></code> | <code>string</code> | The ID of a Traffic Mirror filter. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId">trafficMirrorTargetId</a></code> | <code>string</code> | The ID of a Traffic Mirror target. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description">description</a></code> | <code>string</code> | The description of the Traffic Mirror session. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.ownerId">ownerId</a></code> | <code>string</code> | The ID of the account that owns the Traffic Mirror session. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength">packetLength</a></code> | <code>number</code> | The number of bytes in each packet to mirror. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>[]</code> | The tags assigned to the Traffic Mirror session. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId">virtualNetworkId</a></code> | <code>number</code> | The VXLAN ID for the Traffic Mirror session. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

The ID of the source network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#network_interface_id Ec2TrafficMirrorSession#network_interface_id}

---

##### `sessionNumber`<sup>Required</sup> <a name="sessionNumber" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.sessionNumber"></a>

```typescript
public readonly sessionNumber: number;
```

- *Type:* number

The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions.

The first session with a matching filter is the one that mirrors the packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#session_number Ec2TrafficMirrorSession#session_number}

---

##### `trafficMirrorFilterId`<sup>Required</sup> <a name="trafficMirrorFilterId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorFilterId"></a>

```typescript
public readonly trafficMirrorFilterId: string;
```

- *Type:* string

The ID of a Traffic Mirror filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}

---

##### `trafficMirrorTargetId`<sup>Required</sup> <a name="trafficMirrorTargetId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.trafficMirrorTargetId"></a>

```typescript
public readonly trafficMirrorTargetId: string;
```

- *Type:* string

The ID of a Traffic Mirror target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the Traffic Mirror session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#description Ec2TrafficMirrorSession#description}

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

The ID of the account that owns the Traffic Mirror session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#owner_id Ec2TrafficMirrorSession#owner_id}

---

##### `packetLength`<sup>Optional</sup> <a name="packetLength" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.packetLength"></a>

```typescript
public readonly packetLength: number;
```

- *Type:* number

The number of bytes in each packet to mirror.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#packet_length Ec2TrafficMirrorSession#packet_length}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2TrafficMirrorSessionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>[]

The tags assigned to the Traffic Mirror session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#tags Ec2TrafficMirrorSession#tags}

---

##### `virtualNetworkId`<sup>Optional</sup> <a name="virtualNetworkId" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionConfig.property.virtualNetworkId"></a>

```typescript
public readonly virtualNetworkId: number;
```

- *Type:* number

The VXLAN ID for the Traffic Mirror session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}

---

### Ec2TrafficMirrorSessionTags <a name="Ec2TrafficMirrorSessionTags" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags.Initializer"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

const ec2TrafficMirrorSessionTags: ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#key Ec2TrafficMirrorSession#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#value Ec2TrafficMirrorSession#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#key Ec2TrafficMirrorSession#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_traffic_mirror_session#value Ec2TrafficMirrorSession#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TrafficMirrorSessionTagsList <a name="Ec2TrafficMirrorSessionTagsList" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.Initializer"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

new ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.get"></a>

```typescript
public get(index: number): Ec2TrafficMirrorSessionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TrafficMirrorSessionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>[]

---


### Ec2TrafficMirrorSessionTagsOutputReference <a name="Ec2TrafficMirrorSessionTagsOutputReference" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer"></a>

```typescript
import { ec2TrafficMirrorSession } from '@cdktn/provider-awscc'

new ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2TrafficMirrorSessionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2TrafficMirrorSession.Ec2TrafficMirrorSessionTags">Ec2TrafficMirrorSessionTags</a>

---



