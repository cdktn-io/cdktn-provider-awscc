# `connectTestCase` Submodule <a name="`connectTestCase` Submodule" id="@cdktn/provider-awscc.connectTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectTestCase <a name="ConnectTestCase" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case awscc_connect_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

new connectTestCase.ConnectTestCase(scope: Construct, id: string, config: ConnectTestCaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig">ConnectTestCaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig">ConnectTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint">putEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData">resetInitializationData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntryPoint` <a name="putEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint"></a>

```typescript
public putEntryPoint(value: ConnectTestCaseEntryPoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putEntryPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags"></a>

```typescript
public putTags(value: IResolvable | ConnectTestCaseTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetEntryPoint"></a>

```typescript
public resetEntryPoint(): void
```

##### `resetInitializationData` <a name="resetInitializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetInitializationData"></a>

```typescript
public resetInitializationData(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

connectTestCase.ConnectTestCase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

connectTestCase.ConnectTestCase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

connectTestCase.ConnectTestCase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

connectTestCase.ConnectTestCase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ConnectTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectTestCase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint">entryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime">lastModifiedTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn">testCaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput">entryPointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput">initializationDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData">initializationData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPoint"></a>

```typescript
public readonly entryPoint: ConnectTestCaseEntryPointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference">ConnectTestCaseEntryPointOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedRegion"></a>

```typescript
public readonly lastModifiedRegion: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tags"></a>

```typescript
public readonly tags: ConnectTestCaseTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList">ConnectTestCaseTagsList</a>

---

##### `testCaseArn`<sup>Required</sup> <a name="testCaseArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.testCaseArn"></a>

```typescript
public readonly testCaseArn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: IResolvable | ConnectTestCaseEntryPoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---

##### `initializationDataInput`<sup>Optional</sup> <a name="initializationDataInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationDataInput"></a>

```typescript
public readonly initializationDataInput: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | ConnectTestCaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `initializationData`<sup>Required</sup> <a name="initializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.initializationData"></a>

```typescript
public readonly initializationData: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectTestCaseConfig <a name="ConnectTestCaseConfig" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

const connectTestCaseConfig: connectTestCase.ConnectTestCaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content">content</a></code> | <code>string</code> | The content of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name">name</a></code> | <code>string</code> | The name of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description">description</a></code> | <code>string</code> | The description of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint">entryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | Entry point for Testcase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData">initializationData</a></code> | <code>string</code> | The initialization data of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status">status</a></code> | <code>string</code> | The status of the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]</code> | One or more tags. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

The content of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#content ConnectTestCase#content}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#instance_arn ConnectTestCase#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#name ConnectTestCase#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#description ConnectTestCase#description}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.entryPoint"></a>

```typescript
public readonly entryPoint: ConnectTestCaseEntryPoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

Entry point for Testcase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#entry_point ConnectTestCase#entry_point}

---

##### `initializationData`<sup>Optional</sup> <a name="initializationData" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.initializationData"></a>

```typescript
public readonly initializationData: string;
```

- *Type:* string

The initialization data of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#initialization_data ConnectTestCase#initialization_data}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The status of the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#status ConnectTestCase#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | ConnectTestCaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

One or more tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#tags ConnectTestCase#tags}

---

### ConnectTestCaseEntryPoint <a name="ConnectTestCaseEntryPoint" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

const connectTestCaseEntryPoint: connectTestCase.ConnectTestCaseEntryPoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters">chatEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | The chat entry point parameters for the test case. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type">type</a></code> | <code>string</code> | The type of the Entry Point. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters">voiceCallEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | The voice call entry point parameters for the test case. |

---

##### `chatEntryPointParameters`<sup>Optional</sup> <a name="chatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.chatEntryPointParameters"></a>

```typescript
public readonly chatEntryPointParameters: ConnectTestCaseEntryPointChatEntryPointParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

The chat entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#chat_entry_point_parameters ConnectTestCase#chat_entry_point_parameters}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the Entry Point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#type ConnectTestCase#type}

---

##### `voiceCallEntryPointParameters`<sup>Optional</sup> <a name="voiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint.property.voiceCallEntryPointParameters"></a>

```typescript
public readonly voiceCallEntryPointParameters: ConnectTestCaseEntryPointVoiceCallEntryPointParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

The voice call entry point parameters for the test case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#voice_call_entry_point_parameters ConnectTestCase#voice_call_entry_point_parameters}

---

### ConnectTestCaseEntryPointChatEntryPointParameters <a name="ConnectTestCaseEntryPointChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

const connectTestCaseEntryPointChatEntryPointParameters: connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId">flowId</a></code> | <code>string</code> | The flow id used for the TestCase. |

---

##### `flowId`<sup>Optional</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

### ConnectTestCaseEntryPointVoiceCallEntryPointParameters <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

const connectTestCaseEntryPointVoiceCallEntryPointParameters: connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber">destinationPhoneNumber</a></code> | <code>string</code> | The destination phonenumber of the EntryPoint. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId">flowId</a></code> | <code>string</code> | The flow id used for the TestCase. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber">sourcePhoneNumber</a></code> | <code>string</code> | The source phonenumber of the EntryPoint. |

---

##### `destinationPhoneNumber`<sup>Optional</sup> <a name="destinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.destinationPhoneNumber"></a>

```typescript
public readonly destinationPhoneNumber: string;
```

- *Type:* string

The destination phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#destination_phone_number ConnectTestCase#destination_phone_number}

---

##### `flowId`<sup>Optional</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The flow id used for the TestCase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#flow_id ConnectTestCase#flow_id}

---

##### `sourcePhoneNumber`<sup>Optional</sup> <a name="sourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters.property.sourcePhoneNumber"></a>

```typescript
public readonly sourcePhoneNumber: string;
```

- *Type:* string

The source phonenumber of the EntryPoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#source_phone_number ConnectTestCase#source_phone_number}

---

### ConnectTestCaseTags <a name="ConnectTestCaseTags" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

const connectTestCaseTags: connectTestCase.ConnectTestCaseTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#key ConnectTestCase#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_test_case#value ConnectTestCase#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectTestCaseEntryPointChatEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointChatEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

new connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId">resetFlowId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFlowId` <a name="resetFlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.resetFlowId"></a>

```typescript
public resetFlowId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId">flowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowIdInput"></a>

```typescript
public readonly flowIdInput: string;
```

- *Type:* string

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTestCaseEntryPointChatEntryPointParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---


### ConnectTestCaseEntryPointOutputReference <a name="ConnectTestCaseEntryPointOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

new connectTestCase.ConnectTestCaseEntryPointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters">putChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters">putVoiceCallEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters">resetChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters">resetVoiceCallEntryPointParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putChatEntryPointParameters` <a name="putChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters"></a>

```typescript
public putChatEntryPointParameters(value: ConnectTestCaseEntryPointChatEntryPointParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putChatEntryPointParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---

##### `putVoiceCallEntryPointParameters` <a name="putVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters"></a>

```typescript
public putVoiceCallEntryPointParameters(value: ConnectTestCaseEntryPointVoiceCallEntryPointParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.putVoiceCallEntryPointParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---

##### `resetChatEntryPointParameters` <a name="resetChatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetChatEntryPointParameters"></a>

```typescript
public resetChatEntryPointParameters(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetVoiceCallEntryPointParameters` <a name="resetVoiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.resetVoiceCallEntryPointParameters"></a>

```typescript
public resetVoiceCallEntryPointParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters">chatEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters">voiceCallEntryPointParameters</a></code> | <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput">chatEntryPointParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput">voiceCallEntryPointParametersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `chatEntryPointParameters`<sup>Required</sup> <a name="chatEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParameters"></a>

```typescript
public readonly chatEntryPointParameters: ConnectTestCaseEntryPointChatEntryPointParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParametersOutputReference">ConnectTestCaseEntryPointChatEntryPointParametersOutputReference</a>

---

##### `voiceCallEntryPointParameters`<sup>Required</sup> <a name="voiceCallEntryPointParameters" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParameters"></a>

```typescript
public readonly voiceCallEntryPointParameters: ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference">ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference</a>

---

##### `chatEntryPointParametersInput`<sup>Optional</sup> <a name="chatEntryPointParametersInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.chatEntryPointParametersInput"></a>

```typescript
public readonly chatEntryPointParametersInput: IResolvable | ConnectTestCaseEntryPointChatEntryPointParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointChatEntryPointParameters">ConnectTestCaseEntryPointChatEntryPointParameters</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `voiceCallEntryPointParametersInput`<sup>Optional</sup> <a name="voiceCallEntryPointParametersInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.voiceCallEntryPointParametersInput"></a>

```typescript
public readonly voiceCallEntryPointParametersInput: IResolvable | ConnectTestCaseEntryPointVoiceCallEntryPointParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTestCaseEntryPoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPoint">ConnectTestCaseEntryPoint</a>

---


### ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference <a name="ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

new connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber">resetDestinationPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId">resetFlowId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber">resetSourcePhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPhoneNumber` <a name="resetDestinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetDestinationPhoneNumber"></a>

```typescript
public resetDestinationPhoneNumber(): void
```

##### `resetFlowId` <a name="resetFlowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetFlowId"></a>

```typescript
public resetFlowId(): void
```

##### `resetSourcePhoneNumber` <a name="resetSourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.resetSourcePhoneNumber"></a>

```typescript
public resetSourcePhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput">destinationPhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput">sourcePhoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber">destinationPhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId">flowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber">sourcePhoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationPhoneNumberInput`<sup>Optional</sup> <a name="destinationPhoneNumberInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumberInput"></a>

```typescript
public readonly destinationPhoneNumberInput: string;
```

- *Type:* string

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowIdInput"></a>

```typescript
public readonly flowIdInput: string;
```

- *Type:* string

---

##### `sourcePhoneNumberInput`<sup>Optional</sup> <a name="sourcePhoneNumberInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumberInput"></a>

```typescript
public readonly sourcePhoneNumberInput: string;
```

- *Type:* string

---

##### `destinationPhoneNumber`<sup>Required</sup> <a name="destinationPhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.destinationPhoneNumber"></a>

```typescript
public readonly destinationPhoneNumber: string;
```

- *Type:* string

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

---

##### `sourcePhoneNumber`<sup>Required</sup> <a name="sourcePhoneNumber" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.sourcePhoneNumber"></a>

```typescript
public readonly sourcePhoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTestCaseEntryPointVoiceCallEntryPointParameters;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseEntryPointVoiceCallEntryPointParameters">ConnectTestCaseEntryPointVoiceCallEntryPointParameters</a>

---


### ConnectTestCaseTagsList <a name="ConnectTestCaseTagsList" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

new connectTestCase.ConnectTestCaseTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get"></a>

```typescript
public get(index: number): ConnectTestCaseTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTestCaseTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>[]

---


### ConnectTestCaseTagsOutputReference <a name="ConnectTestCaseTagsOutputReference" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer"></a>

```typescript
import { connectTestCase } from '@cdktn/provider-awscc'

new connectTestCase.ConnectTestCaseTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectTestCaseTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectTestCase.ConnectTestCaseTags">ConnectTestCaseTags</a>

---



