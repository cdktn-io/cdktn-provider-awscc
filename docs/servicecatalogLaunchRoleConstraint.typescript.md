# `servicecatalogLaunchRoleConstraint` Submodule <a name="`servicecatalogLaunchRoleConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogLaunchRoleConstraint <a name="ServicecatalogLaunchRoleConstraint" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint awscc_servicecatalog_launch_role_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer"></a>

```typescript
import { servicecatalogLaunchRoleConstraint } from '@cdktn/provider-awscc'

new servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint(scope: Construct, id: string, config: ServicecatalogLaunchRoleConstraintConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig">ServicecatalogLaunchRoleConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig">ServicecatalogLaunchRoleConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetLocalRoleName">resetLocalRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLocalRoleName` <a name="resetLocalRoleName" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetLocalRoleName"></a>

```typescript
public resetLocalRoleName(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogLaunchRoleConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isConstruct"></a>

```typescript
import { servicecatalogLaunchRoleConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformElement"></a>

```typescript
import { servicecatalogLaunchRoleConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformResource"></a>

```typescript
import { servicecatalogLaunchRoleConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport"></a>

```typescript
import { servicecatalogLaunchRoleConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicecatalogLaunchRoleConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogLaunchRoleConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogLaunchRoleConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogLaunchRoleConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.launchRoleConstraintId">launchRoleConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleNameInput">localRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleName">localRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchRoleConstraintId`<sup>Required</sup> <a name="launchRoleConstraintId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.launchRoleConstraintId"></a>

```typescript
public readonly launchRoleConstraintId: string;
```

- *Type:* string

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `localRoleNameInput`<sup>Optional</sup> <a name="localRoleNameInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleNameInput"></a>

```typescript
public readonly localRoleNameInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `localRoleName`<sup>Required</sup> <a name="localRoleName" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.localRoleName"></a>

```typescript
public readonly localRoleName: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogLaunchRoleConstraintConfig <a name="ServicecatalogLaunchRoleConstraintConfig" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.Initializer"></a>

```typescript
import { servicecatalogLaunchRoleConstraint } from '@cdktn/provider-awscc'

const servicecatalogLaunchRoleConstraintConfig: servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | The ID of the portfolio to which this launch role constraint applies. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.productId">productId</a></code> | <code>string</code> | The ID of the product to which this launch role constraint applies. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | The language code for the constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.description">description</a></code> | <code>string</code> | The description of the launch role constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.localRoleName">localRoleName</a></code> | <code>string</code> | The local IAM role name to use in the launch constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the IAM role used for the launch constraint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

The ID of the portfolio to which this launch role constraint applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint#portfolio_id ServicecatalogLaunchRoleConstraint#portfolio_id}

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The ID of the product to which this launch role constraint applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint#product_id ServicecatalogLaunchRoleConstraint#product_id}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

The language code for the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint#accept_language ServicecatalogLaunchRoleConstraint#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the launch role constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint#description ServicecatalogLaunchRoleConstraint#description}

---

##### `localRoleName`<sup>Optional</sup> <a name="localRoleName" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.localRoleName"></a>

```typescript
public readonly localRoleName: string;
```

- *Type:* string

The local IAM role name to use in the launch constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint#local_role_name ServicecatalogLaunchRoleConstraint#local_role_name}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.servicecatalogLaunchRoleConstraint.ServicecatalogLaunchRoleConstraintConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the IAM role used for the launch constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_launch_role_constraint#role_arn ServicecatalogLaunchRoleConstraint#role_arn}

---



