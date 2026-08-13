# `ec2VpcBlockPublicAccessOptions` Submodule <a name="`ec2VpcBlockPublicAccessOptions` Submodule" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcBlockPublicAccessOptions <a name="Ec2VpcBlockPublicAccessOptions" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_options awscc_ec2_vpc_block_public_access_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.Initializer"></a>

```typescript
import { ec2VpcBlockPublicAccessOptions } from '@cdktn/provider-awscc'

new ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions(scope: Construct, id: string, config: Ec2VpcBlockPublicAccessOptionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig">Ec2VpcBlockPublicAccessOptionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig">Ec2VpcBlockPublicAccessOptionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcBlockPublicAccessOptions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isConstruct"></a>

```typescript
import { ec2VpcBlockPublicAccessOptions } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformElement"></a>

```typescript
import { ec2VpcBlockPublicAccessOptions } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformResource"></a>

```typescript
import { ec2VpcBlockPublicAccessOptions } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.generateConfigForImport"></a>

```typescript
import { ec2VpcBlockPublicAccessOptions } from '@cdktn/provider-awscc'

ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VpcBlockPublicAccessOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VpcBlockPublicAccessOptions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VpcBlockPublicAccessOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcBlockPublicAccessOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.exclusionsAllowed">exclusionsAllowed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.internetGatewayBlockModeInput">internetGatewayBlockModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.internetGatewayBlockMode">internetGatewayBlockMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `exclusionsAllowed`<sup>Required</sup> <a name="exclusionsAllowed" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.exclusionsAllowed"></a>

```typescript
public readonly exclusionsAllowed: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internetGatewayBlockModeInput`<sup>Optional</sup> <a name="internetGatewayBlockModeInput" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.internetGatewayBlockModeInput"></a>

```typescript
public readonly internetGatewayBlockModeInput: string;
```

- *Type:* string

---

##### `internetGatewayBlockMode`<sup>Required</sup> <a name="internetGatewayBlockMode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.internetGatewayBlockMode"></a>

```typescript
public readonly internetGatewayBlockMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcBlockPublicAccessOptionsConfig <a name="Ec2VpcBlockPublicAccessOptionsConfig" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.Initializer"></a>

```typescript
import { ec2VpcBlockPublicAccessOptions } from '@cdktn/provider-awscc'

const ec2VpcBlockPublicAccessOptionsConfig: ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.internetGatewayBlockMode">internetGatewayBlockMode</a></code> | <code>string</code> | The desired Block Public Access mode for Internet Gateways in your account. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `internetGatewayBlockMode`<sup>Required</sup> <a name="internetGatewayBlockMode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessOptions.Ec2VpcBlockPublicAccessOptionsConfig.property.internetGatewayBlockMode"></a>

```typescript
public readonly internetGatewayBlockMode: string;
```

- *Type:* string

The desired Block Public Access mode for Internet Gateways in your account.

We do not allow to create in a off mode as this is the default value

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_options#internet_gateway_block_mode Ec2VpcBlockPublicAccessOptions#internet_gateway_block_mode}

---



