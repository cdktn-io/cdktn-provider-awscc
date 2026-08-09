# `route53ProfilesProfileAssociation` Submodule <a name="`route53ProfilesProfileAssociation` Submodule" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesProfileAssociation <a name="Route53ProfilesProfileAssociation" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association awscc_route53profiles_profile_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

new route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation(scope: Construct, id: string, config: Route53ProfilesProfileAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig">Route53ProfilesProfileAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig">Route53ProfilesProfileAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.putTags"></a>

```typescript
public putTags(value: IResolvable | Route53ProfilesProfileAssociationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ProfilesProfileAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isConstruct"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformElement"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformResource"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53ProfilesProfileAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ProfilesProfileAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ProfilesProfileAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ProfilesProfileAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileAssociationId">profileAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList">Route53ProfilesProfileAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `profileAssociationId`<sup>Required</sup> <a name="profileAssociationId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileAssociationId"></a>

```typescript
public readonly profileAssociationId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tags"></a>

```typescript
public readonly tags: Route53ProfilesProfileAssociationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList">Route53ProfilesProfileAssociationTagsList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Route53ProfilesProfileAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesProfileAssociationConfig <a name="Route53ProfilesProfileAssociationConfig" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.Initializer"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

const route53ProfilesProfileAssociationConfig: route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.name">name</a></code> | <code>string</code> | The name of an association between a  Profile and a VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.profileId">profileId</a></code> | <code>string</code> | The ID of the  profile that you associated with the resource that is specified by ResourceId. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.resourceId">resourceId</a></code> | <code>string</code> | The resource that you associated the  profile with. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.arn">arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the profile association. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of an association between a  Profile and a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#name Route53ProfilesProfileAssociation#name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ID of the  profile that you associated with the resource that is specified by ResourceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#profile_id Route53ProfilesProfileAssociation#profile_id}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The resource that you associated the  profile with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#resource_id Route53ProfilesProfileAssociation#resource_id}

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the profile association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#arn Route53ProfilesProfileAssociation#arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Route53ProfilesProfileAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#tags Route53ProfilesProfileAssociation#tags}

---

### Route53ProfilesProfileAssociationTags <a name="Route53ProfilesProfileAssociationTags" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.Initializer"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

const route53ProfilesProfileAssociationTags: route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#key Route53ProfilesProfileAssociation#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53profiles_profile_association#value Route53ProfilesProfileAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ProfilesProfileAssociationTagsList <a name="Route53ProfilesProfileAssociationTagsList" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

new route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.get"></a>

```typescript
public get(index: number): Route53ProfilesProfileAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ProfilesProfileAssociationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>[]

---


### Route53ProfilesProfileAssociationTagsOutputReference <a name="Route53ProfilesProfileAssociationTagsOutputReference" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer"></a>

```typescript
import { route53ProfilesProfileAssociation } from '@cdktn/provider-awscc'

new route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53ProfilesProfileAssociationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53ProfilesProfileAssociation.Route53ProfilesProfileAssociationTags">Route53ProfilesProfileAssociationTags</a>

---



