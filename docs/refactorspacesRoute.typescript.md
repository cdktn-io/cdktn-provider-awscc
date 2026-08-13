# `refactorspacesRoute` Submodule <a name="`refactorspacesRoute` Submodule" id="@cdktn/provider-awscc.refactorspacesRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RefactorspacesRoute <a name="RefactorspacesRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route awscc_refactorspaces_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

new refactorspacesRoute.RefactorspacesRoute(scope: Construct, id: string, config: RefactorspacesRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig">RefactorspacesRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig">RefactorspacesRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute">putDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute">putUriPathRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetDefaultRoute">resetDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetUriPathRoute">resetUriPathRoute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDefaultRoute` <a name="putDefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute"></a>

```typescript
public putDefaultRoute(value: RefactorspacesRouteDefaultRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putDefaultRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags"></a>

```typescript
public putTags(value: IResolvable | RefactorspacesRouteTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

---

##### `putUriPathRoute` <a name="putUriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute"></a>

```typescript
public putUriPathRoute(value: RefactorspacesRouteUriPathRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.putUriPathRoute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---

##### `resetDefaultRoute` <a name="resetDefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetDefaultRoute"></a>

```typescript
public resetDefaultRoute(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUriPathRoute` <a name="resetUriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.resetUriPathRoute"></a>

```typescript
public resetUriPathRoute(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RefactorspacesRoute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

refactorspacesRoute.RefactorspacesRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

refactorspacesRoute.RefactorspacesRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

refactorspacesRoute.RefactorspacesRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

refactorspacesRoute.RefactorspacesRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RefactorspacesRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RefactorspacesRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RefactorspacesRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RefactorspacesRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRoute">defaultRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference">RefactorspacesRouteDefaultRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.pathResourceToId">pathResourceToId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeIdentifier">routeIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList">RefactorspacesRouteTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRoute">uriPathRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference">RefactorspacesRouteUriPathRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifierInput">applicationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRouteInput">defaultRouteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeTypeInput">routeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRouteInput">uriPathRouteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifier">applicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeType">routeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultRoute`<sup>Required</sup> <a name="defaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRoute"></a>

```typescript
public readonly defaultRoute: RefactorspacesRouteDefaultRouteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference">RefactorspacesRouteDefaultRouteOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `pathResourceToId`<sup>Required</sup> <a name="pathResourceToId" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.pathResourceToId"></a>

```typescript
public readonly pathResourceToId: string;
```

- *Type:* string

---

##### `routeIdentifier`<sup>Required</sup> <a name="routeIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeIdentifier"></a>

```typescript
public readonly routeIdentifier: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tags"></a>

```typescript
public readonly tags: RefactorspacesRouteTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList">RefactorspacesRouteTagsList</a>

---

##### `uriPathRoute`<sup>Required</sup> <a name="uriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRoute"></a>

```typescript
public readonly uriPathRoute: RefactorspacesRouteUriPathRouteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference">RefactorspacesRouteUriPathRouteOutputReference</a>

---

##### `applicationIdentifierInput`<sup>Optional</sup> <a name="applicationIdentifierInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifierInput"></a>

```typescript
public readonly applicationIdentifierInput: string;
```

- *Type:* string

---

##### `defaultRouteInput`<sup>Optional</sup> <a name="defaultRouteInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.defaultRouteInput"></a>

```typescript
public readonly defaultRouteInput: IResolvable | RefactorspacesRouteDefaultRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifierInput"></a>

```typescript
public readonly environmentIdentifierInput: string;
```

- *Type:* string

---

##### `routeTypeInput`<sup>Optional</sup> <a name="routeTypeInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeTypeInput"></a>

```typescript
public readonly routeTypeInput: string;
```

- *Type:* string

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifierInput"></a>

```typescript
public readonly serviceIdentifierInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RefactorspacesRouteTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

---

##### `uriPathRouteInput`<sup>Optional</sup> <a name="uriPathRouteInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.uriPathRouteInput"></a>

```typescript
public readonly uriPathRouteInput: IResolvable | RefactorspacesRouteUriPathRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.applicationIdentifier"></a>

```typescript
public readonly applicationIdentifier: string;
```

- *Type:* string

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

---

##### `routeType`<sup>Required</sup> <a name="routeType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.routeType"></a>

```typescript
public readonly routeType: string;
```

- *Type:* string

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RefactorspacesRouteConfig <a name="RefactorspacesRouteConfig" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

const refactorspacesRouteConfig: refactorspacesRoute.RefactorspacesRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.applicationIdentifier">applicationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.routeType">routeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.defaultRoute">defaultRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.uriPathRoute">uriPathRoute</a></code> | <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationIdentifier`<sup>Required</sup> <a name="applicationIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.applicationIdentifier"></a>

```typescript
public readonly applicationIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#application_identifier RefactorspacesRoute#application_identifier}.

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.environmentIdentifier"></a>

```typescript
public readonly environmentIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#environment_identifier RefactorspacesRoute#environment_identifier}.

---

##### `routeType`<sup>Required</sup> <a name="routeType" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.routeType"></a>

```typescript
public readonly routeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#route_type RefactorspacesRoute#route_type}.

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#service_identifier RefactorspacesRoute#service_identifier}.

---

##### `defaultRoute`<sup>Optional</sup> <a name="defaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.defaultRoute"></a>

```typescript
public readonly defaultRoute: RefactorspacesRouteDefaultRoute;
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#default_route RefactorspacesRoute#default_route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RefactorspacesRouteTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#tags RefactorspacesRoute#tags}

---

##### `uriPathRoute`<sup>Optional</sup> <a name="uriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteConfig.property.uriPathRoute"></a>

```typescript
public readonly uriPathRoute: RefactorspacesRouteUriPathRoute;
```

- *Type:* <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#uri_path_route RefactorspacesRoute#uri_path_route}.

---

### RefactorspacesRouteDefaultRoute <a name="RefactorspacesRouteDefaultRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

const refactorspacesRouteDefaultRoute: refactorspacesRoute.RefactorspacesRouteDefaultRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.property.activationState">activationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}. |

---

##### `activationState`<sup>Optional</sup> <a name="activationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute.property.activationState"></a>

```typescript
public readonly activationState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

### RefactorspacesRouteTags <a name="RefactorspacesRouteTags" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

const refactorspacesRouteTags: refactorspacesRoute.RefactorspacesRouteTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.key">key</a></code> | <code>string</code> | A string used to identify this tag. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.value">value</a></code> | <code>string</code> | A string containing the value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A string used to identify this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#key RefactorspacesRoute#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A string containing the value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#value RefactorspacesRoute#value}

---

### RefactorspacesRouteUriPathRoute <a name="RefactorspacesRouteUriPathRoute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

const refactorspacesRouteUriPathRoute: refactorspacesRoute.RefactorspacesRouteUriPathRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.activationState">activationState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.appendSourcePath">appendSourcePath</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.includeChildPaths">includeChildPaths</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.methods">methods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.sourcePath">sourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}. |

---

##### `activationState`<sup>Optional</sup> <a name="activationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.activationState"></a>

```typescript
public readonly activationState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#activation_state RefactorspacesRoute#activation_state}.

---

##### `appendSourcePath`<sup>Optional</sup> <a name="appendSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.appendSourcePath"></a>

```typescript
public readonly appendSourcePath: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#append_source_path RefactorspacesRoute#append_source_path}.

---

##### `includeChildPaths`<sup>Optional</sup> <a name="includeChildPaths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.includeChildPaths"></a>

```typescript
public readonly includeChildPaths: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#include_child_paths RefactorspacesRoute#include_child_paths}.

---

##### `methods`<sup>Optional</sup> <a name="methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#methods RefactorspacesRoute#methods}.

---

##### `sourcePath`<sup>Optional</sup> <a name="sourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/refactorspaces_route#source_path RefactorspacesRoute#source_path}.

---

## Classes <a name="Classes" id="Classes"></a>

### RefactorspacesRouteDefaultRouteOutputReference <a name="RefactorspacesRouteDefaultRouteOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

new refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resetActivationState">resetActivationState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActivationState` <a name="resetActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.resetActivationState"></a>

```typescript
public resetActivationState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationStateInput">activationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationState">activationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activationStateInput`<sup>Optional</sup> <a name="activationStateInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationStateInput"></a>

```typescript
public readonly activationStateInput: string;
```

- *Type:* string

---

##### `activationState`<sup>Required</sup> <a name="activationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.activationState"></a>

```typescript
public readonly activationState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RefactorspacesRouteDefaultRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteDefaultRoute">RefactorspacesRouteDefaultRoute</a>

---


### RefactorspacesRouteTagsList <a name="RefactorspacesRouteTagsList" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

new refactorspacesRoute.RefactorspacesRouteTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get"></a>

```typescript
public get(index: number): RefactorspacesRouteTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RefactorspacesRouteTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>[]

---


### RefactorspacesRouteTagsOutputReference <a name="RefactorspacesRouteTagsOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

new refactorspacesRoute.RefactorspacesRouteTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RefactorspacesRouteTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteTags">RefactorspacesRouteTags</a>

---


### RefactorspacesRouteUriPathRouteOutputReference <a name="RefactorspacesRouteUriPathRouteOutputReference" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer"></a>

```typescript
import { refactorspacesRoute } from '@cdktn/provider-awscc'

new refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetActivationState">resetActivationState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetAppendSourcePath">resetAppendSourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetIncludeChildPaths">resetIncludeChildPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetMethods">resetMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetSourcePath">resetSourcePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActivationState` <a name="resetActivationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetActivationState"></a>

```typescript
public resetActivationState(): void
```

##### `resetAppendSourcePath` <a name="resetAppendSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetAppendSourcePath"></a>

```typescript
public resetAppendSourcePath(): void
```

##### `resetIncludeChildPaths` <a name="resetIncludeChildPaths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetIncludeChildPaths"></a>

```typescript
public resetIncludeChildPaths(): void
```

##### `resetMethods` <a name="resetMethods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetMethods"></a>

```typescript
public resetMethods(): void
```

##### `resetSourcePath` <a name="resetSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.resetSourcePath"></a>

```typescript
public resetSourcePath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationStateInput">activationStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePathInput">appendSourcePathInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPathsInput">includeChildPathsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methodsInput">methodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePathInput">sourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationState">activationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath">appendSourcePath</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths">includeChildPaths</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methods">methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePath">sourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activationStateInput`<sup>Optional</sup> <a name="activationStateInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationStateInput"></a>

```typescript
public readonly activationStateInput: string;
```

- *Type:* string

---

##### `appendSourcePathInput`<sup>Optional</sup> <a name="appendSourcePathInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePathInput"></a>

```typescript
public readonly appendSourcePathInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildPathsInput`<sup>Optional</sup> <a name="includeChildPathsInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPathsInput"></a>

```typescript
public readonly includeChildPathsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `methodsInput`<sup>Optional</sup> <a name="methodsInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methodsInput"></a>

```typescript
public readonly methodsInput: string[];
```

- *Type:* string[]

---

##### `sourcePathInput`<sup>Optional</sup> <a name="sourcePathInput" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePathInput"></a>

```typescript
public readonly sourcePathInput: string;
```

- *Type:* string

---

##### `activationState`<sup>Required</sup> <a name="activationState" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.activationState"></a>

```typescript
public readonly activationState: string;
```

- *Type:* string

---

##### `appendSourcePath`<sup>Required</sup> <a name="appendSourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.appendSourcePath"></a>

```typescript
public readonly appendSourcePath: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildPaths`<sup>Required</sup> <a name="includeChildPaths" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.includeChildPaths"></a>

```typescript
public readonly includeChildPaths: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `methods`<sup>Required</sup> <a name="methods" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.methods"></a>

```typescript
public readonly methods: string[];
```

- *Type:* string[]

---

##### `sourcePath`<sup>Required</sup> <a name="sourcePath" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.sourcePath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RefactorspacesRouteUriPathRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.refactorspacesRoute.RefactorspacesRouteUriPathRoute">RefactorspacesRouteUriPathRoute</a>

---



