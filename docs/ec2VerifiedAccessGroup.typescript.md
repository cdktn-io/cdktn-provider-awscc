# `ec2VerifiedAccessGroup` Submodule <a name="`ec2VerifiedAccessGroup` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessGroup <a name="Ec2VerifiedAccessGroup" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group awscc_ec2_verified_access_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

new ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup(scope: Construct, id: string, config: Ec2VerifiedAccessGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig">Ec2VerifiedAccessGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig">Ec2VerifiedAccessGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putSseSpecification">putSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyEnabled">resetPolicyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetSseSpecification">resetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSseSpecification` <a name="putSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putSseSpecification"></a>

```typescript
public putSseSpecification(value: Ec2VerifiedAccessGroupSseSpecification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2VerifiedAccessGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetPolicyEnabled` <a name="resetPolicyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetPolicyEnabled"></a>

```typescript
public resetPolicyEnabled(): void
```

##### `resetSseSpecification` <a name="resetSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetSseSpecification"></a>

```typescript
public resetSseSpecification(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isConstruct"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformElement"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformResource"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2VerifiedAccessGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2VerifiedAccessGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2VerifiedAccessGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference">Ec2VerifiedAccessGroupSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList">Ec2VerifiedAccessGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupArn">verifiedAccessGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupId">verifiedAccessGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabledInput">policyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecificationInput">sseSpecificationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceIdInput">verifiedAccessInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabled">policyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: Ec2VerifiedAccessGroupSseSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference">Ec2VerifiedAccessGroupSseSpecificationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tags"></a>

```typescript
public readonly tags: Ec2VerifiedAccessGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList">Ec2VerifiedAccessGroupTagsList</a>

---

##### `verifiedAccessGroupArn`<sup>Required</sup> <a name="verifiedAccessGroupArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupArn"></a>

```typescript
public readonly verifiedAccessGroupArn: string;
```

- *Type:* string

---

##### `verifiedAccessGroupId`<sup>Required</sup> <a name="verifiedAccessGroupId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessGroupId"></a>

```typescript
public readonly verifiedAccessGroupId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `policyEnabledInput`<sup>Optional</sup> <a name="policyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabledInput"></a>

```typescript
public readonly policyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sseSpecificationInput`<sup>Optional</sup> <a name="sseSpecificationInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.sseSpecificationInput"></a>

```typescript
public readonly sseSpecificationInput: IResolvable | Ec2VerifiedAccessGroupSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2VerifiedAccessGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

---

##### `verifiedAccessInstanceIdInput`<sup>Optional</sup> <a name="verifiedAccessInstanceIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceIdInput"></a>

```typescript
public readonly verifiedAccessInstanceIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `policyEnabled`<sup>Required</sup> <a name="policyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.policyEnabled"></a>

```typescript
public readonly policyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessGroupConfig <a name="Ec2VerifiedAccessGroupConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.Initializer"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

const ec2VerifiedAccessGroupConfig: ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.verifiedAccessInstanceId">verifiedAccessInstanceId</a></code> | <code>string</code> | The ID of the AWS Verified Access instance. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.description">description</a></code> | <code>string</code> | A description for the AWS Verified Access group. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | The AWS Verified Access policy document. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyEnabled">policyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | The status of the Verified Access policy. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `verifiedAccessInstanceId`<sup>Required</sup> <a name="verifiedAccessInstanceId" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.verifiedAccessInstanceId"></a>

```typescript
public readonly verifiedAccessInstanceId: string;
```

- *Type:* string

The ID of the AWS Verified Access instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#verified_access_instance_id Ec2VerifiedAccessGroup#verified_access_instance_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the AWS Verified Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#description Ec2VerifiedAccessGroup#description}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

The AWS Verified Access policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#policy_document Ec2VerifiedAccessGroup#policy_document}

---

##### `policyEnabled`<sup>Optional</sup> <a name="policyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.policyEnabled"></a>

```typescript
public readonly policyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The status of the Verified Access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#policy_enabled Ec2VerifiedAccessGroup#policy_enabled}

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.sseSpecification"></a>

```typescript
public readonly sseSpecification: Ec2VerifiedAccessGroupSseSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#sse_specification Ec2VerifiedAccessGroup#sse_specification}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2VerifiedAccessGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#tags Ec2VerifiedAccessGroup#tags}

---

### Ec2VerifiedAccessGroupSseSpecification <a name="Ec2VerifiedAccessGroupSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.Initializer"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

const ec2VerifiedAccessGroupSseSpecification: ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#customer_managed_key_enabled Ec2VerifiedAccessGroup#customer_managed_key_enabled}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#kms_key_arn Ec2VerifiedAccessGroup#kms_key_arn}

---

### Ec2VerifiedAccessGroupTags <a name="Ec2VerifiedAccessGroupTags" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.Initializer"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

const ec2VerifiedAccessGroupTags: ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#key Ec2VerifiedAccessGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_verified_access_group#value Ec2VerifiedAccessGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessGroupSseSpecificationOutputReference <a name="Ec2VerifiedAccessGroupSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

new ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```typescript
public resetCustomerManagedKeyEnabled(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```typescript
public readonly customerManagedKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessGroupSseSpecification;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupSseSpecification">Ec2VerifiedAccessGroupSseSpecification</a>

---


### Ec2VerifiedAccessGroupTagsList <a name="Ec2VerifiedAccessGroupTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

new ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.get"></a>

```typescript
public get(index: number): Ec2VerifiedAccessGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>[]

---


### Ec2VerifiedAccessGroupTagsOutputReference <a name="Ec2VerifiedAccessGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer"></a>

```typescript
import { ec2VerifiedAccessGroup } from '@cdktn/provider-awscc'

new ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2VerifiedAccessGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VerifiedAccessGroup.Ec2VerifiedAccessGroupTags">Ec2VerifiedAccessGroupTags</a>

---



