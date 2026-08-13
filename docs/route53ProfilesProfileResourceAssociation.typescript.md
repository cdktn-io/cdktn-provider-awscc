# `route53ProfilesProfileResourceAssociation` Submodule <a name="`route53ProfilesProfileResourceAssociation` Submodule" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ProfilesProfileResourceAssociation <a name="Route53ProfilesProfileResourceAssociation" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53profiles_profile_resource_association awscc_route53profiles_profile_resource_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer"></a>

```typescript
import { route53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

new route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation(scope: Construct, id: string, config: Route53ProfilesProfileResourceAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig">Route53ProfilesProfileResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig">Route53ProfilesProfileResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetResourceProperties">resetResourceProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetResourceProperties` <a name="resetResourceProperties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.resetResourceProperties"></a>

```typescript
public resetResourceProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct"></a>

```typescript
import { route53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement"></a>

```typescript
import { route53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource"></a>

```typescript
import { route53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport"></a>

```typescript
import { route53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53ProfilesProfileResourceAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53ProfilesProfileResourceAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53ProfilesProfileResourceAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53profiles_profile_resource_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53ProfilesProfileResourceAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileResourceAssociationId">profileResourceAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileIdInput">profileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourcePropertiesInput">resourcePropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileId">profileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceProperties">resourceProperties</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `profileResourceAssociationId`<sup>Required</sup> <a name="profileResourceAssociationId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileResourceAssociationId"></a>

```typescript
public readonly profileResourceAssociationId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileIdInput"></a>

```typescript
public readonly profileIdInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `resourcePropertiesInput`<sup>Optional</sup> <a name="resourcePropertiesInput" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourcePropertiesInput"></a>

```typescript
public readonly resourcePropertiesInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceProperties`<sup>Required</sup> <a name="resourceProperties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.resourceProperties"></a>

```typescript
public readonly resourceProperties: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ProfilesProfileResourceAssociationConfig <a name="Route53ProfilesProfileResourceAssociationConfig" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.Initializer"></a>

```typescript
import { route53ProfilesProfileResourceAssociation } from '@cdktn/provider-awscc'

const route53ProfilesProfileResourceAssociationConfig: route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.name">name</a></code> | <code>string</code> | The name of an association between the  Profile and resource. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.profileId">profileId</a></code> | <code>string</code> | The ID of the  profile that you associated the resource to that is specified by ResourceArn. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | The arn of the resource that you associated to the  Profile. |
| <code><a href="#@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceProperties">resourceProperties</a></code> | <code>string</code> | A JSON-formatted string with key-value pairs specifying the properties of the associated resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of an association between the  Profile and resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53profiles_profile_resource_association#name Route53ProfilesProfileResourceAssociation#name}

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.profileId"></a>

```typescript
public readonly profileId: string;
```

- *Type:* string

The ID of the  profile that you associated the resource to that is specified by ResourceArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53profiles_profile_resource_association#profile_id Route53ProfilesProfileResourceAssociation#profile_id}

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

The arn of the resource that you associated to the  Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53profiles_profile_resource_association#resource_arn Route53ProfilesProfileResourceAssociation#resource_arn}

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktn/provider-awscc.route53ProfilesProfileResourceAssociation.Route53ProfilesProfileResourceAssociationConfig.property.resourceProperties"></a>

```typescript
public readonly resourceProperties: string;
```

- *Type:* string

A JSON-formatted string with key-value pairs specifying the properties of the associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53profiles_profile_resource_association#resource_properties Route53ProfilesProfileResourceAssociation#resource_properties}

---



