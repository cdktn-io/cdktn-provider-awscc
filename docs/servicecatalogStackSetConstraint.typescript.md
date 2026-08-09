# `servicecatalogStackSetConstraint` Submodule <a name="`servicecatalogStackSetConstraint` Submodule" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogStackSetConstraint <a name="ServicecatalogStackSetConstraint" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint awscc_servicecatalog_stack_set_constraint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer"></a>

```typescript
import { servicecatalogStackSetConstraint } from '@cdktn/provider-awscc'

new servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint(scope: Construct, id: string, config: ServicecatalogStackSetConstraintConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig">ServicecatalogStackSetConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig">ServicecatalogStackSetConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetAcceptLanguage">resetAcceptLanguage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcceptLanguage` <a name="resetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.resetAcceptLanguage"></a>

```typescript
public resetAcceptLanguage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct"></a>

```typescript
import { servicecatalogStackSetConstraint } from '@cdktn/provider-awscc'

servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement"></a>

```typescript
import { servicecatalogStackSetConstraint } from '@cdktn/provider-awscc'

servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource"></a>

```typescript
import { servicecatalogStackSetConstraint } from '@cdktn/provider-awscc'

servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport"></a>

```typescript
import { servicecatalogStackSetConstraint } from '@cdktn/provider-awscc'

servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ServicecatalogStackSetConstraint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicecatalogStackSetConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicecatalogStackSetConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogStackSetConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackSetConstraintId">stackSetConstraintId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguageInput">acceptLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountListInput">accountListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRoleInput">adminRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRoleInput">executionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioIdInput">portfolioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionListInput">regionListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControlInput">stackInstanceControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountList">accountList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRole">adminRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioId">portfolioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productId">productId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionList">regionList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControl">stackInstanceControl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `stackSetConstraintId`<sup>Required</sup> <a name="stackSetConstraintId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackSetConstraintId"></a>

```typescript
public readonly stackSetConstraintId: string;
```

- *Type:* string

---

##### `acceptLanguageInput`<sup>Optional</sup> <a name="acceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguageInput"></a>

```typescript
public readonly acceptLanguageInput: string;
```

- *Type:* string

---

##### `accountListInput`<sup>Optional</sup> <a name="accountListInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountListInput"></a>

```typescript
public readonly accountListInput: string[];
```

- *Type:* string[]

---

##### `adminRoleInput`<sup>Optional</sup> <a name="adminRoleInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRoleInput"></a>

```typescript
public readonly adminRoleInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `executionRoleInput`<sup>Optional</sup> <a name="executionRoleInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRoleInput"></a>

```typescript
public readonly executionRoleInput: string;
```

- *Type:* string

---

##### `portfolioIdInput`<sup>Optional</sup> <a name="portfolioIdInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioIdInput"></a>

```typescript
public readonly portfolioIdInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `regionListInput`<sup>Optional</sup> <a name="regionListInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionListInput"></a>

```typescript
public readonly regionListInput: string[];
```

- *Type:* string[]

---

##### `stackInstanceControlInput`<sup>Optional</sup> <a name="stackInstanceControlInput" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControlInput"></a>

```typescript
public readonly stackInstanceControlInput: string;
```

- *Type:* string

---

##### `acceptLanguage`<sup>Required</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

---

##### `accountList`<sup>Required</sup> <a name="accountList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.accountList"></a>

```typescript
public readonly accountList: string[];
```

- *Type:* string[]

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.adminRole"></a>

```typescript
public readonly adminRole: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.regionList"></a>

```typescript
public readonly regionList: string[];
```

- *Type:* string[]

---

##### `stackInstanceControl`<sup>Required</sup> <a name="stackInstanceControl" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.stackInstanceControl"></a>

```typescript
public readonly stackInstanceControl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogStackSetConstraintConfig <a name="ServicecatalogStackSetConstraintConfig" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.Initializer"></a>

```typescript
import { servicecatalogStackSetConstraint } from '@cdktn/provider-awscc'

const servicecatalogStackSetConstraintConfig: servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.accountList">accountList</a></code> | <code>string[]</code> | One or more AWS accounts that will have access to the provisioned product. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.adminRole">adminRole</a></code> | <code>string</code> | AdminRole ARN. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.description">description</a></code> | <code>string</code> | The description of the constraint. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.executionRole">executionRole</a></code> | <code>string</code> | ExecutionRole name. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.portfolioId">portfolioId</a></code> | <code>string</code> | The portfolio identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.productId">productId</a></code> | <code>string</code> | The product identifier. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.regionList">regionList</a></code> | <code>string[]</code> | One or more AWS Regions where the provisioned product will be available. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.stackInstanceControl">stackInstanceControl</a></code> | <code>string</code> | Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.acceptLanguage">acceptLanguage</a></code> | <code>string</code> | The language code. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountList`<sup>Required</sup> <a name="accountList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.accountList"></a>

```typescript
public readonly accountList: string[];
```

- *Type:* string[]

One or more AWS accounts that will have access to the provisioned product.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#account_list ServicecatalogStackSetConstraint#account_list}

---

##### `adminRole`<sup>Required</sup> <a name="adminRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.adminRole"></a>

```typescript
public readonly adminRole: string;
```

- *Type:* string

AdminRole ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#admin_role ServicecatalogStackSetConstraint#admin_role}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#description ServicecatalogStackSetConstraint#description}

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

ExecutionRole name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#execution_role ServicecatalogStackSetConstraint#execution_role}

---

##### `portfolioId`<sup>Required</sup> <a name="portfolioId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.portfolioId"></a>

```typescript
public readonly portfolioId: string;
```

- *Type:* string

The portfolio identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#portfolio_id ServicecatalogStackSetConstraint#portfolio_id}

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The product identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#product_id ServicecatalogStackSetConstraint#product_id}

---

##### `regionList`<sup>Required</sup> <a name="regionList" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.regionList"></a>

```typescript
public readonly regionList: string[];
```

- *Type:* string[]

One or more AWS Regions where the provisioned product will be available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#region_list ServicecatalogStackSetConstraint#region_list}

---

##### `stackInstanceControl`<sup>Required</sup> <a name="stackInstanceControl" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.stackInstanceControl"></a>

```typescript
public readonly stackInstanceControl: string;
```

- *Type:* string

Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#stack_instance_control ServicecatalogStackSetConstraint#stack_instance_control}

---

##### `acceptLanguage`<sup>Optional</sup> <a name="acceptLanguage" id="@cdktn/provider-awscc.servicecatalogStackSetConstraint.ServicecatalogStackSetConstraintConfig.property.acceptLanguage"></a>

```typescript
public readonly acceptLanguage: string;
```

- *Type:* string

The language code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/servicecatalog_stack_set_constraint#accept_language ServicecatalogStackSetConstraint#accept_language}

---



