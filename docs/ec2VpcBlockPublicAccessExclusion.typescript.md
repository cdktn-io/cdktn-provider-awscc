# `ec2VpcBlockPublicAccessExclusion` Submodule <a name="`ec2VpcBlockPublicAccessExclusion` Submodule" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcBlockPublicAccessExclusion <a name="Ec2VpcBlockPublicAccessExclusion" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion awscc_ec2_vpc_block_public_access_exclusion}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

new ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion(scope: Construct, id: string, config: Ec2VpcBlockPublicAccessExclusionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig">Ec2VpcBlockPublicAccessExclusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig">Ec2VpcBlockPublicAccessExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VpcBlockPublicAccessExclusionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

---

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcBlockPublicAccessExclusion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcBlockPublicAccessExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcBlockPublicAccessExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.exclusionId">exclusionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList">Ec2VpcBlockPublicAccessExclusionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput">internetGatewayExclusionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode">internetGatewayExclusionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `exclusionId`<sup>Required</sup> <a name="exclusionId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.exclusionId"></a>

```typescript
public readonly exclusionId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tags"></a>

```typescript
public readonly tags: Ec2VpcBlockPublicAccessExclusionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList">Ec2VpcBlockPublicAccessExclusionTagsList</a>

---

##### `internetGatewayExclusionModeInput`<sup>Optional</sup> <a name="internetGatewayExclusionModeInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput"></a>

```typescript
public readonly internetGatewayExclusionModeInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VpcBlockPublicAccessExclusionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `internetGatewayExclusionMode`<sup>Required</sup> <a name="internetGatewayExclusionMode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode"></a>

```typescript
public readonly internetGatewayExclusionMode: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcBlockPublicAccessExclusionConfig <a name="Ec2VpcBlockPublicAccessExclusionConfig" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.Initializer"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

const ec2VpcBlockPublicAccessExclusionConfig: ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode">internetGatewayExclusionMode</a></code> | <code>string</code> | The desired Block Public Access Exclusion Mode for a specific VPC/Subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.subnetId">subnetId</a></code> | <code>string</code> | The ID of the subnet. Required only if you don't specify VpcId. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.vpcId">vpcId</a></code> | <code>string</code> | The ID of the vpc. Required only if you don't specify SubnetId. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `internetGatewayExclusionMode`<sup>Required</sup> <a name="internetGatewayExclusionMode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode"></a>

```typescript
public readonly internetGatewayExclusionMode: string;
```

- *Type:* string

The desired Block Public Access Exclusion Mode for a specific VPC/Subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion#internet_gateway_exclusion_mode Ec2VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

The ID of the subnet. Required only if you don't specify VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion#subnet_id Ec2VpcBlockPublicAccessExclusion#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VpcBlockPublicAccessExclusionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion#tags Ec2VpcBlockPublicAccessExclusion#tags}

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The ID of the vpc. Required only if you don't specify SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion#vpc_id Ec2VpcBlockPublicAccessExclusion#vpc_id}

---

### Ec2VpcBlockPublicAccessExclusionTags <a name="Ec2VpcBlockPublicAccessExclusionTags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.Initializer"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

const ec2VpcBlockPublicAccessExclusionTags: ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion#key Ec2VpcBlockPublicAccessExclusion#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_vpc_block_public_access_exclusion#value Ec2VpcBlockPublicAccessExclusion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcBlockPublicAccessExclusionTagsList <a name="Ec2VpcBlockPublicAccessExclusionTagsList" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

new ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get"></a>

```typescript
public get(index: number): Ec2VpcBlockPublicAccessExclusionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcBlockPublicAccessExclusionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>[]

---


### Ec2VpcBlockPublicAccessExclusionTagsOutputReference <a name="Ec2VpcBlockPublicAccessExclusionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer"></a>

```typescript
import { ec2VpcBlockPublicAccessExclusion } from '@cdktn/provider-awscc'

new ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VpcBlockPublicAccessExclusionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>

---



