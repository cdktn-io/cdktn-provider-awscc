# `route53GlobalresolverHostedZoneAssociation` Submodule <a name="`route53GlobalresolverHostedZoneAssociation` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverHostedZoneAssociation <a name="Route53GlobalresolverHostedZoneAssociation" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association awscc_route53globalresolver_hosted_zone_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.Initializer"></a>

```typescript
import { route53GlobalresolverHostedZoneAssociation } from '@cdktn/provider-awscc'

new route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation(scope: Construct, id: string, config: Route53GlobalresolverHostedZoneAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig">Route53GlobalresolverHostedZoneAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig">Route53GlobalresolverHostedZoneAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverHostedZoneAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isConstruct"></a>

```typescript
import { route53GlobalresolverHostedZoneAssociation } from '@cdktn/provider-awscc'

route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformElement"></a>

```typescript
import { route53GlobalresolverHostedZoneAssociation } from '@cdktn/provider-awscc'

route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformResource"></a>

```typescript
import { route53GlobalresolverHostedZoneAssociation } from '@cdktn/provider-awscc'

route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.generateConfigForImport"></a>

```typescript
import { route53GlobalresolverHostedZoneAssociation } from '@cdktn/provider-awscc'

route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53GlobalresolverHostedZoneAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53GlobalresolverHostedZoneAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53GlobalresolverHostedZoneAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverHostedZoneAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneAssociationId">hostedZoneAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneName">hostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.resourceArnInput">resourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `hostedZoneAssociationId`<sup>Required</sup> <a name="hostedZoneAssociationId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneAssociationId"></a>

```typescript
public readonly hostedZoneAssociationId: string;
```

- *Type:* string

---

##### `hostedZoneName`<sup>Required</sup> <a name="hostedZoneName" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneName"></a>

```typescript
public readonly hostedZoneName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceArnInput`<sup>Optional</sup> <a name="resourceArnInput" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.resourceArnInput"></a>

```typescript
public readonly resourceArnInput: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverHostedZoneAssociationConfig <a name="Route53GlobalresolverHostedZoneAssociationConfig" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.Initializer"></a>

```typescript
import { route53GlobalresolverHostedZoneAssociation } from '@cdktn/provider-awscc'

const route53GlobalresolverHostedZoneAssociationConfig: route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association#hosted_zone_id Route53GlobalresolverHostedZoneAssociation#hosted_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association#name Route53GlobalresolverHostedZoneAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.resourceArn">resourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association#resource_arn Route53GlobalresolverHostedZoneAssociation#resource_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association#hosted_zone_id Route53GlobalresolverHostedZoneAssociation#hosted_zone_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association#name Route53GlobalresolverHostedZoneAssociation#name}.

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.route53GlobalresolverHostedZoneAssociation.Route53GlobalresolverHostedZoneAssociationConfig.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/route53globalresolver_hosted_zone_association#resource_arn Route53GlobalresolverHostedZoneAssociation#resource_arn}.

---



