# `ec2SecondaryNetwork` Submodule <a name="`ec2SecondaryNetwork` Submodule" id="@cdktn/provider-awscc.ec2SecondaryNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecondaryNetwork <a name="Ec2SecondaryNetwork" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_secondary_network awscc_ec2_secondary_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

new ec2SecondaryNetwork.Ec2SecondaryNetwork(scope: Construct, id: string, config: Ec2SecondaryNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig">Ec2SecondaryNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig">Ec2SecondaryNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2SecondaryNetworkTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecondaryNetwork resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isConstruct"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

ec2SecondaryNetwork.Ec2SecondaryNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformElement"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformResource"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.generateConfigForImport"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

ec2SecondaryNetwork.Ec2SecondaryNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2SecondaryNetwork resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SecondaryNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SecondaryNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_secondary_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecondaryNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ipv4CidrBlockAssociations">ipv4CidrBlockAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList">Ec2SecondaryNetworkIpv4CidrBlockAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.secondaryNetworkArn">secondaryNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.secondaryNetworkId">secondaryNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList">Ec2SecondaryNetworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ipv4CidrBlockInput">ipv4CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ipv4CidrBlock">ipv4CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv4CidrBlockAssociations`<sup>Required</sup> <a name="ipv4CidrBlockAssociations" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ipv4CidrBlockAssociations"></a>

```typescript
public readonly ipv4CidrBlockAssociations: Ec2SecondaryNetworkIpv4CidrBlockAssociationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList">Ec2SecondaryNetworkIpv4CidrBlockAssociationsList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `secondaryNetworkArn`<sup>Required</sup> <a name="secondaryNetworkArn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.secondaryNetworkArn"></a>

```typescript
public readonly secondaryNetworkArn: string;
```

- *Type:* string

---

##### `secondaryNetworkId`<sup>Required</sup> <a name="secondaryNetworkId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.secondaryNetworkId"></a>

```typescript
public readonly secondaryNetworkId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.tags"></a>

```typescript
public readonly tags: Ec2SecondaryNetworkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList">Ec2SecondaryNetworkTagsList</a>

---

##### `ipv4CidrBlockInput`<sup>Optional</sup> <a name="ipv4CidrBlockInput" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ipv4CidrBlockInput"></a>

```typescript
public readonly ipv4CidrBlockInput: string;
```

- *Type:* string

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2SecondaryNetworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>[]

---

##### `ipv4CidrBlock`<sup>Required</sup> <a name="ipv4CidrBlock" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.ipv4CidrBlock"></a>

```typescript
public readonly ipv4CidrBlock: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecondaryNetworkConfig <a name="Ec2SecondaryNetworkConfig" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

const ec2SecondaryNetworkConfig: ec2SecondaryNetwork.Ec2SecondaryNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.ipv4CidrBlock">ipv4CidrBlock</a></code> | <code>string</code> | The IPv4 CIDR block for the secondary network. The CIDR block size must be between /12 and /28. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.networkType">networkType</a></code> | <code>string</code> | The type of secondary network. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>[]</code> | The tags for the secondary network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipv4CidrBlock`<sup>Required</sup> <a name="ipv4CidrBlock" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.ipv4CidrBlock"></a>

```typescript
public readonly ipv4CidrBlock: string;
```

- *Type:* string

The IPv4 CIDR block for the secondary network. The CIDR block size must be between /12 and /28.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_secondary_network#ipv_4_cidr_block Ec2SecondaryNetwork#ipv_4_cidr_block}

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The type of secondary network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_secondary_network#network_type Ec2SecondaryNetwork#network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2SecondaryNetworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>[]

The tags for the secondary network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_secondary_network#tags Ec2SecondaryNetwork#tags}

---

### Ec2SecondaryNetworkIpv4CidrBlockAssociations <a name="Ec2SecondaryNetworkIpv4CidrBlockAssociations" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociations.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

const ec2SecondaryNetworkIpv4CidrBlockAssociations: ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociations = { ... }
```


### Ec2SecondaryNetworkTags <a name="Ec2SecondaryNetworkTags" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

const ec2SecondaryNetworkTags: ec2SecondaryNetwork.Ec2SecondaryNetworkTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_secondary_network#key Ec2SecondaryNetwork#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/ec2_secondary_network#value Ec2SecondaryNetwork#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SecondaryNetworkIpv4CidrBlockAssociationsList <a name="Ec2SecondaryNetworkIpv4CidrBlockAssociationsList" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

new ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.get"></a>

```typescript
public get(index: number): Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference <a name="Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

new ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociations">Ec2SecondaryNetworkIpv4CidrBlockAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Ec2SecondaryNetworkIpv4CidrBlockAssociations;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkIpv4CidrBlockAssociations">Ec2SecondaryNetworkIpv4CidrBlockAssociations</a>

---


### Ec2SecondaryNetworkTagsList <a name="Ec2SecondaryNetworkTagsList" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

new ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.get"></a>

```typescript
public get(index: number): Ec2SecondaryNetworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecondaryNetworkTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>[]

---


### Ec2SecondaryNetworkTagsOutputReference <a name="Ec2SecondaryNetworkTagsOutputReference" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer"></a>

```typescript
import { ec2SecondaryNetwork } from '@cdktn/provider-awscc'

new ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2SecondaryNetworkTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2SecondaryNetwork.Ec2SecondaryNetworkTags">Ec2SecondaryNetworkTags</a>

---



