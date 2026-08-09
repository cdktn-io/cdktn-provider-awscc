# `apigatewayUsagePlanKey` Submodule <a name="`apigatewayUsagePlanKey` Submodule" id="@cdktn/provider-awscc.apigatewayUsagePlanKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayUsagePlanKey <a name="ApigatewayUsagePlanKey" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan_key awscc_apigateway_usage_plan_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.Initializer"></a>

```typescript
import { apigatewayUsagePlanKey } from '@cdktn/provider-awscc'

new apigatewayUsagePlanKey.ApigatewayUsagePlanKey(scope: Construct, id: string, config: ApigatewayUsagePlanKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig">ApigatewayUsagePlanKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig">ApigatewayUsagePlanKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayUsagePlanKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isConstruct"></a>

```typescript
import { apigatewayUsagePlanKey } from '@cdktn/provider-awscc'

apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformElement"></a>

```typescript
import { apigatewayUsagePlanKey } from '@cdktn/provider-awscc'

apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformResource"></a>

```typescript
import { apigatewayUsagePlanKey } from '@cdktn/provider-awscc'

apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.generateConfigForImport"></a>

```typescript
import { apigatewayUsagePlanKey } from '@cdktn/provider-awscc'

apigatewayUsagePlanKey.ApigatewayUsagePlanKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApigatewayUsagePlanKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayUsagePlanKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayUsagePlanKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayUsagePlanKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.usagePlanKeyId">usagePlanKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.usagePlanIdInput">usagePlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `usagePlanKeyId`<sup>Required</sup> <a name="usagePlanKeyId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.usagePlanKeyId"></a>

```typescript
public readonly usagePlanKeyId: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `usagePlanIdInput`<sup>Optional</sup> <a name="usagePlanIdInput" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.usagePlanIdInput"></a>

```typescript
public readonly usagePlanIdInput: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayUsagePlanKeyConfig <a name="ApigatewayUsagePlanKeyConfig" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.Initializer"></a>

```typescript
import { apigatewayUsagePlanKey } from '@cdktn/provider-awscc'

const apigatewayUsagePlanKeyConfig: apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.keyId">keyId</a></code> | <code>string</code> | The Id of the UsagePlanKey resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.keyType">keyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan_key#key_type ApigatewayUsagePlanKey#key_type}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.usagePlanId">usagePlanId</a></code> | <code>string</code> | The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

The Id of the UsagePlanKey resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan_key#key_id ApigatewayUsagePlanKey#key_id}

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan_key#key_type ApigatewayUsagePlanKey#key_type}.

---

##### `usagePlanId`<sup>Required</sup> <a name="usagePlanId" id="@cdktn/provider-awscc.apigatewayUsagePlanKey.ApigatewayUsagePlanKeyConfig.property.usagePlanId"></a>

```typescript
public readonly usagePlanId: string;
```

- *Type:* string

The Id of the UsagePlan resource representing the usage plan containing the UsagePlanKey resource representing a plan customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan_key#usage_plan_id ApigatewayUsagePlanKey#usage_plan_id}

---



