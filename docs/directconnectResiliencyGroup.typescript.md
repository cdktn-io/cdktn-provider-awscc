# `directconnectResiliencyGroup` Submodule <a name="`directconnectResiliencyGroup` Submodule" id="@cdktn/provider-awscc.directconnectResiliencyGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectResiliencyGroup <a name="DirectconnectResiliencyGroup" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group awscc_directconnect_resiliency_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

new directconnectResiliencyGroup.DirectconnectResiliencyGroup(scope: Construct, id: string, config: DirectconnectResiliencyGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig">DirectconnectResiliencyGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig">DirectconnectResiliencyGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetConnectionArns">resetConnectionArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetIntendedResiliencyModel">resetIntendedResiliencyModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | DirectconnectResiliencyGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

---

##### `resetConnectionArns` <a name="resetConnectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetConnectionArns"></a>

```typescript
public resetConnectionArns(): void
```

##### `resetIntendedResiliencyModel` <a name="resetIntendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetIntendedResiliencyModel"></a>

```typescript
public resetIntendedResiliencyModel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectResiliencyGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectconnectResiliencyGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectResiliencyGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectResiliencyGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectResiliencyGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupArn">resiliencyGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupId">resiliencyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList">DirectconnectResiliencyGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArnsInput">connectionArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModelInput">intendedResiliencyModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupNameInput">resiliencyGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArns">connectionArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModel">intendedResiliencyModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupName">resiliencyGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resiliencyGroupArn`<sup>Required</sup> <a name="resiliencyGroupArn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupArn"></a>

```typescript
public readonly resiliencyGroupArn: string;
```

- *Type:* string

---

##### `resiliencyGroupId`<sup>Required</sup> <a name="resiliencyGroupId" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupId"></a>

```typescript
public readonly resiliencyGroupId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tags"></a>

```typescript
public readonly tags: DirectconnectResiliencyGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList">DirectconnectResiliencyGroupTagsList</a>

---

##### `connectionArnsInput`<sup>Optional</sup> <a name="connectionArnsInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArnsInput"></a>

```typescript
public readonly connectionArnsInput: string[];
```

- *Type:* string[]

---

##### `intendedResiliencyModelInput`<sup>Optional</sup> <a name="intendedResiliencyModelInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModelInput"></a>

```typescript
public readonly intendedResiliencyModelInput: string;
```

- *Type:* string

---

##### `resiliencyGroupNameInput`<sup>Optional</sup> <a name="resiliencyGroupNameInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupNameInput"></a>

```typescript
public readonly resiliencyGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DirectconnectResiliencyGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

---

##### `connectionArns`<sup>Required</sup> <a name="connectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.connectionArns"></a>

```typescript
public readonly connectionArns: string[];
```

- *Type:* string[]

---

##### `intendedResiliencyModel`<sup>Required</sup> <a name="intendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.intendedResiliencyModel"></a>

```typescript
public readonly intendedResiliencyModel: string;
```

- *Type:* string

---

##### `resiliencyGroupName`<sup>Required</sup> <a name="resiliencyGroupName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.resiliencyGroupName"></a>

```typescript
public readonly resiliencyGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectResiliencyGroupConfig <a name="DirectconnectResiliencyGroupConfig" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.Initializer"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

const directconnectResiliencyGroupConfig: directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.resiliencyGroupName">resiliencyGroupName</a></code> | <code>string</code> | The name of the resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connectionArns">connectionArns</a></code> | <code>string[]</code> | The ARNs of the connections that are members of the resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.intendedResiliencyModel">intendedResiliencyModel</a></code> | <code>string</code> | The resiliency model that the resiliency group is intended to meet. Required when creating a resiliency group. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]</code> | The tags associated with the resiliency group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `resiliencyGroupName`<sup>Required</sup> <a name="resiliencyGroupName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.resiliencyGroupName"></a>

```typescript
public readonly resiliencyGroupName: string;
```

- *Type:* string

The name of the resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#resiliency_group_name DirectconnectResiliencyGroup#resiliency_group_name}

---

##### `connectionArns`<sup>Optional</sup> <a name="connectionArns" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.connectionArns"></a>

```typescript
public readonly connectionArns: string[];
```

- *Type:* string[]

The ARNs of the connections that are members of the resiliency group.

When specified, this is the complete, authoritative membership list: on update, connections not present are disassociated, and an explicit empty list removes all members. Omit the property to leave the existing membership unmanaged (unchanged on update). On create, an omitted or empty list means no connections are associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#connection_arns DirectconnectResiliencyGroup#connection_arns}

---

##### `intendedResiliencyModel`<sup>Optional</sup> <a name="intendedResiliencyModel" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.intendedResiliencyModel"></a>

```typescript
public readonly intendedResiliencyModel: string;
```

- *Type:* string

The resiliency model that the resiliency group is intended to meet. Required when creating a resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#intended_resiliency_model DirectconnectResiliencyGroup#intended_resiliency_model}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DirectconnectResiliencyGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

The tags associated with the resiliency group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#tags DirectconnectResiliencyGroup#tags}

---

### DirectconnectResiliencyGroupTags <a name="DirectconnectResiliencyGroupTags" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.Initializer"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

const directconnectResiliencyGroupTags: directconnectResiliencyGroup.DirectconnectResiliencyGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#key DirectconnectResiliencyGroup#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/directconnect_resiliency_group#value DirectconnectResiliencyGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectResiliencyGroupTagsList <a name="DirectconnectResiliencyGroupTagsList" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

new directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get"></a>

```typescript
public get(index: number): DirectconnectResiliencyGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectResiliencyGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>[]

---


### DirectconnectResiliencyGroupTagsOutputReference <a name="DirectconnectResiliencyGroupTagsOutputReference" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer"></a>

```typescript
import { directconnectResiliencyGroup } from '@cdktn/provider-awscc'

new directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectconnectResiliencyGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectResiliencyGroup.DirectconnectResiliencyGroupTags">DirectconnectResiliencyGroupTags</a>

---



