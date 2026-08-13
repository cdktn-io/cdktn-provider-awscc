# `servicecatalogLaunchTemplateConstraint` Submodule <a name="`servicecatalogLaunchTemplateConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogLaunchTemplateConstraint <a name="ServicecatalogLaunchTemplateConstraint" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint awscc_servicecatalog_launch_template_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer"></a>

```typescript
import { servicecatalogLaunchTemplateConstraint } from '@cdktn/provider-awscc'

new servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint(scope: Construct, id: string, config: ServicecatalogLaunchTemplateConstraintConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig">ServicecatalogLaunchTemplateConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig">ServicecatalogLaunchTemplateConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.resetDescription"></a>

```typescript
public resetDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct"></a>

```typescript
import { servicecatalogLaunchTemplateConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement"></a>

```typescript
import { servicecatalogLaunchTemplateConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource"></a>

```typescript
import { servicecatalogLaunchTemplateConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport"></a>

```typescript
import { servicecatalogLaunchTemplateConstraint } from '@cdktn/provider-awscc'

servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicecatalogLaunchTemplateConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogLaunchTemplateConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogLaunchTemplateConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogLaunchTemplateConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId">launchTemplateConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput">rulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules">rules</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `launchTemplateConstraintId`<sup>Required</sup> <a name="launchTemplateConstraintId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.launchTemplateConstraintId"></a>

```typescript
public readonly launchTemplateConstraintId: string;
```

- *Type:* string

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rulesInput"></a>

```typescript
public readonly rulesInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.rules"></a>

```typescript
public readonly rules: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogLaunchTemplateConstraintConfig <a name="ServicecatalogLaunchTemplateConstraintConfig" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.Initializer"></a>

```typescript
import { servicecatalogLaunchTemplateConstraint } from '@cdktn/provider-awscc'

const servicecatalogLaunchTemplateConstraintConfig: servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId">productId</a></code> | <code>string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules">rules</a></code> | <code>string</code> | A json encoded string of the template constraint rules. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | The language code. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description">description</a></code> | <code>string</code> | The description of the constraint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#portfolio_id ServicecatalogLaunchTemplateConstraint#portfolio_id}

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#product_id ServicecatalogLaunchTemplateConstraint#product_id}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.rules"></a>

```typescript
public readonly rules: string;
```

- *Type:* string

A json encoded string of the template constraint rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#rules ServicecatalogLaunchTemplateConstraint#rules}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#accept_language ServicecatalogLaunchTemplateConstraint#accept_language}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogLaunchTemplateConstraint.ServicecatalogLaunchTemplateConstraintConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/servicecatalog_launch_template_constraint#description ServicecatalogLaunchTemplateConstraint#description}

---



