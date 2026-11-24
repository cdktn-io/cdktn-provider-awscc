# `apiportalProductSharingPolicy` Submodule <a name="`apiportalProductSharingPolicy` Submodule" id="@cdktn/provider-awscc.apiportalProductSharingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalProductSharingPolicy <a name="ApiportalProductSharingPolicy" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy awscc_apiportal_product_sharing_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.Initializer"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

new apiportalProductSharingPolicy.ApiportalProductSharingPolicy(scope: Construct, id: string, config: ApiportalProductSharingPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig">ApiportalProductSharingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig">ApiportalProductSharingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.putTags"></a>

```typescript
public putTags(value: IResolvable | ApiportalProductSharingPolicyTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiportalProductSharingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isConstruct"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformElement"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformResource"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.generateConfigForImport"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

apiportalProductSharingPolicy.ApiportalProductSharingPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApiportalProductSharingPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiportalProductSharingPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiportalProductSharingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalProductSharingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList">ApiportalProductSharingPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.productIdInput">productIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.productId">productId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.tags"></a>

```typescript
public readonly tags: ApiportalProductSharingPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList">ApiportalProductSharingPolicyTagsList</a>

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `productIdInput`<sup>Optional</sup> <a name="productIdInput" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.productIdInput"></a>

```typescript
public readonly productIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ApiportalProductSharingPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>[]

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalProductSharingPolicyConfig <a name="ApiportalProductSharingPolicyConfig" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.Initializer"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

const apiportalProductSharingPolicyConfig: apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | JSON IAM-style resource-based policy document. Size limit raised to 409,600 chars per RAM's recommended public-policy onboarding guidance. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.productId">productId</a></code> | <code>string</code> | The identifier of the parent Product. Singleton key for this CFN type. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>[]</code> | The tags associated with the product sharing policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

JSON IAM-style resource-based policy document. Size limit raised to 409,600 chars per RAM's recommended public-policy onboarding guidance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#policy_document ApiportalProductSharingPolicy#policy_document}

---

##### `productId`<sup>Required</sup> <a name="productId" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.productId"></a>

```typescript
public readonly productId: string;
```

- *Type:* string

The identifier of the parent Product. Singleton key for this CFN type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#product_id ApiportalProductSharingPolicy#product_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ApiportalProductSharingPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>[]

The tags associated with the product sharing policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#tags ApiportalProductSharingPolicy#tags}

---

### ApiportalProductSharingPolicyTags <a name="ApiportalProductSharingPolicyTags" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags.Initializer"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

const apiportalProductSharingPolicyTags: apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#key ApiportalProductSharingPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#value ApiportalProductSharingPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#key ApiportalProductSharingPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_product_sharing_policy#value ApiportalProductSharingPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalProductSharingPolicyTagsList <a name="ApiportalProductSharingPolicyTagsList" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.Initializer"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

new apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.get"></a>

```typescript
public get(index: number): ApiportalProductSharingPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalProductSharingPolicyTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>[]

---


### ApiportalProductSharingPolicyTagsOutputReference <a name="ApiportalProductSharingPolicyTagsOutputReference" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer"></a>

```typescript
import { apiportalProductSharingPolicy } from '@cdktn/provider-awscc'

new apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApiportalProductSharingPolicyTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalProductSharingPolicy.ApiportalProductSharingPolicyTags">ApiportalProductSharingPolicyTags</a>

---



