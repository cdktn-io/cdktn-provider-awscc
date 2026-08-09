# `deadlineLicenseEndpoint` Submodule <a name="`deadlineLicenseEndpoint` Submodule" id="@cdktn/provider-awscc.deadlineLicenseEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeadlineLicenseEndpoint <a name="DeadlineLicenseEndpoint" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint awscc_deadline_license_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.Initializer"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

new deadlineLicenseEndpoint.DeadlineLicenseEndpoint(scope: Construct, id: string, config: DeadlineLicenseEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig">DeadlineLicenseEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig">DeadlineLicenseEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | DeadlineLicenseEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>[]

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DeadlineLicenseEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isConstruct"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformElement"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformResource"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.generateConfigForImport"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

deadlineLicenseEndpoint.DeadlineLicenseEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DeadlineLicenseEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeadlineLicenseEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeadlineLicenseEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DeadlineLicenseEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.licenseEndpointId">licenseEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList">DeadlineLicenseEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `licenseEndpointId`<sup>Required</sup> <a name="licenseEndpointId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.licenseEndpointId"></a>

```typescript
public readonly licenseEndpointId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.tags"></a>

```typescript
public readonly tags: DeadlineLicenseEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList">DeadlineLicenseEndpointTagsList</a>

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DeadlineLicenseEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeadlineLicenseEndpointConfig <a name="DeadlineLicenseEndpointConfig" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.Initializer"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

const deadlineLicenseEndpointConfig: deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#security_group_ids DeadlineLicenseEndpoint#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#subnet_ids DeadlineLicenseEndpoint#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#vpc_id DeadlineLicenseEndpoint#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#security_group_ids DeadlineLicenseEndpoint#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#subnet_ids DeadlineLicenseEndpoint#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#vpc_id DeadlineLicenseEndpoint#vpc_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DeadlineLicenseEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#tags DeadlineLicenseEndpoint#tags}

---

### DeadlineLicenseEndpointTags <a name="DeadlineLicenseEndpointTags" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags.Initializer"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

const deadlineLicenseEndpointTags: deadlineLicenseEndpoint.DeadlineLicenseEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#key DeadlineLicenseEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/deadline_license_endpoint#value DeadlineLicenseEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DeadlineLicenseEndpointTagsList <a name="DeadlineLicenseEndpointTagsList" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.Initializer"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

new deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.get"></a>

```typescript
public get(index: number): DeadlineLicenseEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineLicenseEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>[]

---


### DeadlineLicenseEndpointTagsOutputReference <a name="DeadlineLicenseEndpointTagsOutputReference" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer"></a>

```typescript
import { deadlineLicenseEndpoint } from '@cdktn/provider-awscc'

new deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DeadlineLicenseEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.deadlineLicenseEndpoint.DeadlineLicenseEndpointTags">DeadlineLicenseEndpointTags</a>

---



