# `comprehendDocumentClassifierEndpoint` Submodule <a name="`comprehendDocumentClassifierEndpoint` Submodule" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifierEndpoint <a name="ComprehendDocumentClassifierEndpoint" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint awscc_comprehend_document_classifier_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

new comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint(scope: Construct, id: string, config: ComprehendDocumentClassifierEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig">ComprehendDocumentClassifierEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig">ComprehendDocumentClassifierEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | ComprehendDocumentClassifierEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ComprehendDocumentClassifierEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComprehendDocumentClassifierEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComprehendDocumentClassifierEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendDocumentClassifierEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.currentInferenceUnits">currentInferenceUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList">ComprehendDocumentClassifierEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnitsInput">desiredInferenceUnitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArnInput">modelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArn">modelArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `currentInferenceUnits`<sup>Required</sup> <a name="currentInferenceUnits" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.currentInferenceUnits"></a>

```typescript
public readonly currentInferenceUnits: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tags"></a>

```typescript
public readonly tags: ComprehendDocumentClassifierEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList">ComprehendDocumentClassifierEndpointTagsList</a>

---

##### `desiredInferenceUnitsInput`<sup>Optional</sup> <a name="desiredInferenceUnitsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnitsInput"></a>

```typescript
public readonly desiredInferenceUnitsInput: number;
```

- *Type:* number

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `modelArnInput`<sup>Optional</sup> <a name="modelArnInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArnInput"></a>

```typescript
public readonly modelArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ComprehendDocumentClassifierEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>[]

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.desiredInferenceUnits"></a>

```typescript
public readonly desiredInferenceUnits: number;
```

- *Type:* number

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierEndpointConfig <a name="ComprehendDocumentClassifierEndpointConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.Initializer"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

const comprehendDocumentClassifierEndpointConfig: comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.desiredInferenceUnits">desiredInferenceUnits</a></code> | <code>number</code> | The desired number of inference units to be used by the model. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.endpointName">endpointName</a></code> | <code>string</code> | The name of the endpoint. The name must be unique within the AWS Region and account. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.modelArn">modelArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>[]</code> | Tags associated with the endpoint being created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `desiredInferenceUnits`<sup>Required</sup> <a name="desiredInferenceUnits" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.desiredInferenceUnits"></a>

```typescript
public readonly desiredInferenceUnits: number;
```

- *Type:* number

The desired number of inference units to be used by the model.

Each inference unit represents throughput of 100 characters per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint#desired_inference_units ComprehendDocumentClassifierEndpoint#desired_inference_units}

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

The name of the endpoint. The name must be unique within the AWS Region and account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint#endpoint_name ComprehendDocumentClassifierEndpoint#endpoint_name}

---

##### `modelArn`<sup>Required</sup> <a name="modelArn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.modelArn"></a>

```typescript
public readonly modelArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint#model_arn ComprehendDocumentClassifierEndpoint#model_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ComprehendDocumentClassifierEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>[]

Tags associated with the endpoint being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint#tags ComprehendDocumentClassifierEndpoint#tags}

---

### ComprehendDocumentClassifierEndpointTags <a name="ComprehendDocumentClassifierEndpointTags" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.Initializer"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

const comprehendDocumentClassifierEndpointTags: comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.key">key</a></code> | <code>string</code> | The initial part of a key-value pair that forms a tag associated with a given resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.value">value</a></code> | <code>string</code> | The second part of a key-value pair that forms a tag associated with a given resource. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The initial part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint#key ComprehendDocumentClassifierEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The second part of a key-value pair that forms a tag associated with a given resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/comprehend_document_classifier_endpoint#value ComprehendDocumentClassifierEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierEndpointTagsList <a name="ComprehendDocumentClassifierEndpointTagsList" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

new comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get"></a>

```typescript
public get(index: number): ComprehendDocumentClassifierEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendDocumentClassifierEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>[]

---


### ComprehendDocumentClassifierEndpointTagsOutputReference <a name="ComprehendDocumentClassifierEndpointTagsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer"></a>

```typescript
import { comprehendDocumentClassifierEndpoint } from '@cdktn/provider-awscc'

new comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComprehendDocumentClassifierEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.comprehendDocumentClassifierEndpoint.ComprehendDocumentClassifierEndpointTags">ComprehendDocumentClassifierEndpointTags</a>

---



