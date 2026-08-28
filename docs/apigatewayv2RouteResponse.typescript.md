# `apigatewayv2RouteResponse` Submodule <a name="`apigatewayv2RouteResponse` Submodule" id="@cdktn/provider-awscc.apigatewayv2RouteResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RouteResponse <a name="Apigatewayv2RouteResponse" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response awscc_apigatewayv2_route_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

new apigatewayv2RouteResponse.Apigatewayv2RouteResponse(scope: Construct, id: string, config: Apigatewayv2RouteResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig">Apigatewayv2RouteResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.putResponseParameters">putResponseParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression">resetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels">resetResponseModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseParameters">resetResponseParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResponseParameters` <a name="putResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.putResponseParameters"></a>

```typescript
public putResponseParameters(value: IResolvable | {[ key: string ]: Apigatewayv2RouteResponseResponseParameters}): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.putResponseParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>}

---

##### `resetModelSelectionExpression` <a name="resetModelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetModelSelectionExpression"></a>

```typescript
public resetModelSelectionExpression(): void
```

##### `resetResponseModels` <a name="resetResponseModels" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseModels"></a>

```typescript
public resetResponseModels(): void
```

##### `resetResponseParameters` <a name="resetResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.resetResponseParameters"></a>

```typescript
public resetResponseParameters(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Apigatewayv2RouteResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Apigatewayv2RouteResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Apigatewayv2RouteResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RouteResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParameters">responseParameters</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap">Apigatewayv2RouteResponseResponseParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseId">routeResponseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput">modelSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput">responseModelsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParametersInput">responseParametersInput</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput">routeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput">routeResponseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels">responseModels</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId">routeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey">routeResponseKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `responseParameters`<sup>Required</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParameters"></a>

```typescript
public readonly responseParameters: Apigatewayv2RouteResponseResponseParametersMap;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap">Apigatewayv2RouteResponseResponseParametersMap</a>

---

##### `routeResponseId`<sup>Required</sup> <a name="routeResponseId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseId"></a>

```typescript
public readonly routeResponseId: string;
```

- *Type:* string

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `modelSelectionExpressionInput`<sup>Optional</sup> <a name="modelSelectionExpressionInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpressionInput"></a>

```typescript
public readonly modelSelectionExpressionInput: string;
```

- *Type:* string

---

##### `responseModelsInput`<sup>Optional</sup> <a name="responseModelsInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModelsInput"></a>

```typescript
public readonly responseModelsInput: string;
```

- *Type:* string

---

##### `responseParametersInput`<sup>Optional</sup> <a name="responseParametersInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseParametersInput"></a>

```typescript
public readonly responseParametersInput: IResolvable | {[ key: string ]: Apigatewayv2RouteResponseResponseParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>}

---

##### `routeIdInput`<sup>Optional</sup> <a name="routeIdInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeIdInput"></a>

```typescript
public readonly routeIdInput: string;
```

- *Type:* string

---

##### `routeResponseKeyInput`<sup>Optional</sup> <a name="routeResponseKeyInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKeyInput"></a>

```typescript
public readonly routeResponseKeyInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="modelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.modelSelectionExpression"></a>

```typescript
public readonly modelSelectionExpression: string;
```

- *Type:* string

---

##### `responseModels`<sup>Required</sup> <a name="responseModels" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.responseModels"></a>

```typescript
public readonly responseModels: string;
```

- *Type:* string

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

---

##### `routeResponseKey`<sup>Required</sup> <a name="routeResponseKey" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.routeResponseKey"></a>

```typescript
public readonly routeResponseKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteResponseConfig <a name="Apigatewayv2RouteResponseConfig" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.Initializer"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

const apigatewayv2RouteResponseConfig: apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId">apiId</a></code> | <code>string</code> | The API identifier. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId">routeId</a></code> | <code>string</code> | The route ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey">routeResponseKey</a></code> | <code>string</code> | The route response key. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>string</code> | The model selection expression for the route response. Supported only for WebSocket APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels">responseModels</a></code> | <code>string</code> | The response models for the route response. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseParameters">responseParameters</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>}</code> | The route response parameters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

The API identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}

---

##### `routeId`<sup>Required</sup> <a name="routeId" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeId"></a>

```typescript
public readonly routeId: string;
```

- *Type:* string

The route ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}

---

##### `routeResponseKey`<sup>Required</sup> <a name="routeResponseKey" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.routeResponseKey"></a>

```typescript
public readonly routeResponseKey: string;
```

- *Type:* string

The route response key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.modelSelectionExpression"></a>

```typescript
public readonly modelSelectionExpression: string;
```

- *Type:* string

The model selection expression for the route response. Supported only for WebSocket APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}

---

##### `responseModels`<sup>Optional</sup> <a name="responseModels" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseModels"></a>

```typescript
public readonly responseModels: string;
```

- *Type:* string

The response models for the route response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}

---

##### `responseParameters`<sup>Optional</sup> <a name="responseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseConfig.property.responseParameters"></a>

```typescript
public readonly responseParameters: IResolvable | {[ key: string ]: Apigatewayv2RouteResponseResponseParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>}

The route response parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#response_parameters Apigatewayv2RouteResponse#response_parameters}

---

### Apigatewayv2RouteResponseResponseParameters <a name="Apigatewayv2RouteResponseResponseParameters" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters.Initializer"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

const apigatewayv2RouteResponseResponseParameters: apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the parameter is required. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the parameter is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigatewayv2_route_response#required Apigatewayv2RouteResponse#required}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RouteResponseResponseParametersMap <a name="Apigatewayv2RouteResponseResponseParametersMap" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

new apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.get"></a>

```typescript
public get(key: string): Apigatewayv2RouteResponseResponseParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>}</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersMap.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | {[ key: string ]: Apigatewayv2RouteResponseResponseParameters};
```

- *Type:* cdktn.IResolvable | {[ key: string ]: <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>}

---


### Apigatewayv2RouteResponseResponseParametersOutputReference <a name="Apigatewayv2RouteResponseResponseParametersOutputReference" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer"></a>

```typescript
import { apigatewayv2RouteResponse } from '@cdktn/provider-awscc'

new apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectKey: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Apigatewayv2RouteResponseResponseParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayv2RouteResponse.Apigatewayv2RouteResponseResponseParameters">Apigatewayv2RouteResponseResponseParameters</a>

---



