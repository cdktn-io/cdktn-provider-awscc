# `apigatewayDocumentationPart` Submodule <a name="`apigatewayDocumentationPart` Submodule" id="@cdktn/provider-awscc.apigatewayDocumentationPart"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDocumentationPart <a name="ApigatewayDocumentationPart" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part awscc_apigateway_documentation_part}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

new apigatewayDocumentationPart.ApigatewayDocumentationPart(scope: Construct, id: string, config: ApigatewayDocumentationPartConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig">ApigatewayDocumentationPartConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig">ApigatewayDocumentationPartConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation">putLocation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation"></a>

```typescript
public putLocation(value: ApigatewayDocumentationPartLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayDocumentationPart resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayDocumentationPart to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayDocumentationPart that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDocumentationPart to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId">documentationPartId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput">locationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput">propertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties">properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `documentationPartId`<sup>Required</sup> <a name="documentationPartId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.documentationPartId"></a>

```typescript
public readonly documentationPartId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.location"></a>

```typescript
public readonly location: ApigatewayDocumentationPartLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference">ApigatewayDocumentationPartLocationOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.locationInput"></a>

```typescript
public readonly locationInput: IResolvable | ApigatewayDocumentationPartLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPart.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDocumentationPartConfig <a name="ApigatewayDocumentationPartConfig" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.Initializer"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

const apigatewayDocumentationPartConfig: apigatewayDocumentationPart.ApigatewayDocumentationPartConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties">properties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.location"></a>

```typescript
public readonly location: ApigatewayDocumentationPartLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

The ``Location`` property specifies the location of the Amazon API Gateway API entity that the documentation applies to.

``Location`` is a property of the [AWS::ApiGateway::DocumentationPart](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-documentationpart.html) resource.
  For more information about each property, including constraints and valid values, see [DocumentationPart](https://docs.aws.amazon.com/apigateway/latest/api/API_DocumentationPartLocation.html) in the *Amazon API Gateway REST API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#location ApigatewayDocumentationPart#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.properties"></a>

```typescript
public readonly properties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#properties ApigatewayDocumentationPart#properties}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#rest_api_id ApigatewayDocumentationPart#rest_api_id}.

---

### ApigatewayDocumentationPartLocation <a name="ApigatewayDocumentationPartLocation" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.Initializer"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

const apigatewayDocumentationPartLocation: apigatewayDocumentationPart.ApigatewayDocumentationPartLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode">statusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#method ApigatewayDocumentationPart#method}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#name ApigatewayDocumentationPart#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#path ApigatewayDocumentationPart#path}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#status_code ApigatewayDocumentationPart#status_code}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_documentation_part#type ApigatewayDocumentationPart#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDocumentationPartLocationOutputReference <a name="ApigatewayDocumentationPartLocationOutputReference" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer"></a>

```typescript
import { apigatewayDocumentationPart } from '@cdktn/provider-awscc'

new apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigatewayDocumentationPartLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apigatewayDocumentationPart.ApigatewayDocumentationPartLocation">ApigatewayDocumentationPartLocation</a>

---



