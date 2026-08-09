# `apptestTestCase` Submodule <a name="`apptestTestCase` Submodule" id="@cdktn/provider-awscc.apptestTestCase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApptestTestCase <a name="ApptestTestCase" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case awscc_apptest_test_case}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCase(scope: Construct, id: string, config: ApptestTestCaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig">ApptestTestCaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig">ApptestTestCaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSteps` <a name="putSteps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps"></a>

```typescript
public putSteps(value: IResolvable | ApptestTestCaseSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.putSteps.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

apptestTestCase.ApptestTestCase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

apptestTestCase.ApptestTestCase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

apptestTestCase.ApptestTestCase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

apptestTestCase.ApptestTestCase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a ApptestTestCase resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApptestTestCase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApptestTestCase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApptestTestCase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime">lastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion">latestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps">steps</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn">testCaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId">testCaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion">testCaseVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput">stepsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: string;
```

- *Type:* string

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.latestVersion"></a>

```typescript
public readonly latestVersion: ApptestTestCaseLatestVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference">ApptestTestCaseLatestVersionOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.steps"></a>

```typescript
public readonly steps: ApptestTestCaseStepsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList">ApptestTestCaseStepsList</a>

---

##### `testCaseArn`<sup>Required</sup> <a name="testCaseArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseArn"></a>

```typescript
public readonly testCaseArn: string;
```

- *Type:* string

---

##### `testCaseId`<sup>Required</sup> <a name="testCaseId" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseId"></a>

```typescript
public readonly testCaseId: string;
```

- *Type:* string

---

##### `testCaseVersion`<sup>Required</sup> <a name="testCaseVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.testCaseVersion"></a>

```typescript
public readonly testCaseVersion: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | ApptestTestCaseSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApptestTestCaseConfig <a name="ApptestTestCaseConfig" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseConfig: apptestTestCase.ApptestTestCaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps">steps</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.steps"></a>

```typescript
public readonly steps: IResolvable | ApptestTestCaseSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#steps ApptestTestCase#steps}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#tags ApptestTestCase#tags}.

---

### ApptestTestCaseLatestVersion <a name="ApptestTestCaseLatestVersion" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseLatestVersion: apptestTestCase.ApptestTestCaseLatestVersion = { ... }
```


### ApptestTestCaseSteps <a name="ApptestTestCaseSteps" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseSteps: apptestTestCase.ApptestTestCaseSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action ApptestTestCase#action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#description ApptestTestCase#description}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.action"></a>

```typescript
public readonly action: ApptestTestCaseStepsAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action ApptestTestCase#action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#description ApptestTestCase#description}.

---

### ApptestTestCaseStepsAction <a name="ApptestTestCaseStepsAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsAction: apptestTestCase.ApptestTestCaseStepsAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction">compareAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction">mainframeAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction">resourceAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}. |

---

##### `compareAction`<sup>Optional</sup> <a name="compareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.compareAction"></a>

```typescript
public readonly compareAction: ApptestTestCaseStepsActionCompareAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#compare_action ApptestTestCase#compare_action}.

---

##### `mainframeAction`<sup>Optional</sup> <a name="mainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.mainframeAction"></a>

```typescript
public readonly mainframeAction: ApptestTestCaseStepsActionMainframeAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#mainframe_action ApptestTestCase#mainframe_action}.

---

##### `resourceAction`<sup>Optional</sup> <a name="resourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction.property.resourceAction"></a>

```typescript
public readonly resourceAction: ApptestTestCaseStepsActionResourceAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource_action ApptestTestCase#resource_action}.

---

### ApptestTestCaseStepsActionCompareAction <a name="ApptestTestCaseStepsActionCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareAction: apptestTestCase.ApptestTestCaseStepsActionCompareAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#input ApptestTestCase#input}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#output ApptestTestCase#output}. |

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.input"></a>

```typescript
public readonly input: ApptestTestCaseStepsActionCompareActionInput;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#input ApptestTestCase#input}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction.property.output"></a>

```typescript
public readonly output: ApptestTestCaseStepsActionCompareActionOutput;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#output ApptestTestCase#output}.

---

### ApptestTestCaseStepsActionCompareActionInput <a name="ApptestTestCaseStepsActionCompareActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionInput: apptestTestCase.ApptestTestCaseStepsActionCompareActionInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput.property.file"></a>

```typescript
public readonly file: ApptestTestCaseStepsActionCompareActionInputFile;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionInputFile <a name="ApptestTestCaseStepsActionCompareActionInputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionInputFile: apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata">fileMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation">targetLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}. |

---

##### `fileMetadata`<sup>Optional</sup> <a name="fileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.fileMetadata"></a>

```typescript
public readonly fileMetadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file_metadata ApptestTestCase#file_metadata}.

---

##### `sourceLocation`<sup>Optional</sup> <a name="sourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#source_location ApptestTestCase#source_location}.

---

##### `targetLocation`<sup>Optional</sup> <a name="targetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile.property.targetLocation"></a>

```typescript
public readonly targetLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#target_location ApptestTestCase#target_location}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionInputFileFileMetadata: apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc">databaseCdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets">dataSets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}. |

---

##### `databaseCdc`<sup>Optional</sup> <a name="databaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.databaseCdc"></a>

```typescript
public readonly databaseCdc: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#database_cdc ApptestTestCase#database_cdc}.

---

##### `dataSets`<sup>Optional</sup> <a name="dataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata.property.dataSets"></a>

```typescript
public readonly dataSets: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#data_sets ApptestTestCase#data_sets}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc: apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata">sourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata">targetMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}. |

---

##### `sourceMetadata`<sup>Optional</sup> <a name="sourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.sourceMetadata"></a>

```typescript
public readonly sourceMetadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#source_metadata ApptestTestCase#source_metadata}.

---

##### `targetMetadata`<sup>Optional</sup> <a name="targetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc.property.targetMetadata"></a>

```typescript
public readonly targetMetadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#target_metadata ApptestTestCase#target_metadata}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata: apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool">captureTool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `captureTool`<sup>Optional</sup> <a name="captureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.captureTool"></a>

```typescript
public readonly captureTool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata: apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool">captureTool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `captureTool`<sup>Optional</sup> <a name="captureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.captureTool"></a>

```typescript
public readonly captureTool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#capture_tool ApptestTestCase#capture_tool}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets: apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid">ccsid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#format ApptestTestCase#format}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length">length</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#length ApptestTestCase#length}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#name ApptestTestCase#name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `ccsid`<sup>Optional</sup> <a name="ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.ccsid"></a>

```typescript
public readonly ccsid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#ccsid ApptestTestCase#ccsid}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#format ApptestTestCase#format}.

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#length ApptestTestCase#length}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#name ApptestTestCase#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionCompareActionOutput <a name="ApptestTestCaseStepsActionCompareActionOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionOutput: apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file ApptestTestCase#file}. |

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput.property.file"></a>

```typescript
public readonly file: ApptestTestCaseStepsActionCompareActionOutputFile;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file ApptestTestCase#file}.

---

### ApptestTestCaseStepsActionCompareActionOutputFile <a name="ApptestTestCaseStepsActionCompareActionOutputFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionCompareActionOutputFile: apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation">fileLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}. |

---

##### `fileLocation`<sup>Optional</sup> <a name="fileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile.property.fileLocation"></a>

```typescript
public readonly fileLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#file_location ApptestTestCase#file_location}.

---

### ApptestTestCaseStepsActionMainframeAction <a name="ApptestTestCaseStepsActionMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionMainframeAction: apptestTestCase.ApptestTestCaseStepsActionMainframeAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType">actionType</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.actionType"></a>

```typescript
public readonly actionType: ApptestTestCaseStepsActionMainframeActionActionType;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.properties"></a>

```typescript
public readonly properties: ApptestTestCaseStepsActionMainframeActionProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionMainframeActionActionType <a name="ApptestTestCaseStepsActionMainframeActionActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionMainframeActionActionType: apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270">tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}. |

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.batch"></a>

```typescript
public readonly batch: ApptestTestCaseStepsActionMainframeActionActionTypeBatch;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#batch ApptestTestCase#batch}.

---

##### `tn3270`<sup>Optional</sup> <a name="tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType.property.tn3270"></a>

```typescript
public readonly tn3270: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#tn_3270 ApptestTestCase#tn_3270}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeBatch <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionMainframeActionActionTypeBatch: apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName">batchJobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters">batchJobParameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames">exportDataSetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |

---

##### `batchJobName`<sup>Optional</sup> <a name="batchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobName"></a>

```typescript
public readonly batchJobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#batch_job_name ApptestTestCase#batch_job_name}.

---

##### `batchJobParameters`<sup>Optional</sup> <a name="batchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.batchJobParameters"></a>

```typescript
public readonly batchJobParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#batch_job_parameters ApptestTestCase#batch_job_parameters}.

---

##### `exportDataSetNames`<sup>Optional</sup> <a name="exportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch.property.exportDataSetNames"></a>

```typescript
public readonly exportDataSetNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionMainframeActionActionTypeTn3270: apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames">exportDataSetNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script">script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#script ApptestTestCase#script}. |

---

##### `exportDataSetNames`<sup>Optional</sup> <a name="exportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.exportDataSetNames"></a>

```typescript
public readonly exportDataSetNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#export_data_set_names ApptestTestCase#export_data_set_names}.

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270.property.script"></a>

```typescript
public readonly script: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#script ApptestTestCase#script}.

---

### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionMainframeActionActionTypeTn3270Script: apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}. |

---

##### `scriptLocation`<sup>Optional</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#script_location ApptestTestCase#script_location}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#type ApptestTestCase#type}.

---

### ApptestTestCaseStepsActionMainframeActionProperties <a name="ApptestTestCaseStepsActionMainframeActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionMainframeActionProperties: apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn">dmsTaskArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}. |

---

##### `dmsTaskArn`<sup>Optional</sup> <a name="dmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties.property.dmsTaskArn"></a>

```typescript
public readonly dmsTaskArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#dms_task_arn ApptestTestCase#dms_task_arn}.

---

### ApptestTestCaseStepsActionResourceAction <a name="ApptestTestCaseStepsActionResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionResourceAction: apptestTestCase.ApptestTestCaseStepsActionResourceAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction">cloudformationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction">m2ManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction">m2NonManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}. |

---

##### `cloudformationAction`<sup>Optional</sup> <a name="cloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.cloudformationAction"></a>

```typescript
public readonly cloudformationAction: ApptestTestCaseStepsActionResourceActionCloudformationAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#cloudformation_action ApptestTestCase#cloudformation_action}.

---

##### `m2ManagedApplicationAction`<sup>Optional</sup> <a name="m2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2ManagedApplicationAction"></a>

```typescript
public readonly m2ManagedApplicationAction: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#m2_managed_application_action ApptestTestCase#m2_managed_application_action}.

---

##### `m2NonManagedApplicationAction`<sup>Optional</sup> <a name="m2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction.property.m2NonManagedApplicationAction"></a>

```typescript
public readonly m2NonManagedApplicationAction: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#m2_non_managed_application_action ApptestTestCase#m2_non_managed_application_action}.

---

### ApptestTestCaseStepsActionResourceActionCloudformationAction <a name="ApptestTestCaseStepsActionResourceActionCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionResourceActionCloudformationAction: apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionResourceActionM2ManagedApplicationAction: apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.properties"></a>

```typescript
public readonly properties: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#properties ApptestTestCase#properties}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties: apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop">forceStop</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation">importDataSetLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}. |

---

##### `forceStop`<sup>Optional</sup> <a name="forceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.forceStop"></a>

```typescript
public readonly forceStop: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#force_stop ApptestTestCase#force_stop}.

---

##### `importDataSetLocation`<sup>Optional</sup> <a name="importDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties.property.importDataSetLocation"></a>

```typescript
public readonly importDataSetLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#import_data_set_location ApptestTestCase#import_data_set_location}.

---

### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

const apptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction: apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType">actionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}. |

---

##### `actionType`<sup>Optional</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#action_type ApptestTestCase#action_type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apptest_test_case#resource ApptestTestCase#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApptestTestCaseLatestVersionOutputReference <a name="ApptestTestCaseLatestVersionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseLatestVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApptestTestCaseLatestVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseLatestVersion">ApptestTestCaseLatestVersion</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata">putSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata">putTargetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata">resetSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata">resetTargetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceMetadata` <a name="putSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata"></a>

```typescript
public putSourceMetadata(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putSourceMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---

##### `putTargetMetadata` <a name="putTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata"></a>

```typescript
public putTargetMetadata(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.putTargetMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---

##### `resetSourceMetadata` <a name="resetSourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetSourceMetadata"></a>

```typescript
public resetSourceMetadata(): void
```

##### `resetTargetMetadata` <a name="resetTargetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.resetTargetMetadata"></a>

```typescript
public resetTargetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata">sourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata">targetMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput">sourceMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput">targetMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceMetadata`<sup>Required</sup> <a name="sourceMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadata"></a>

```typescript
public readonly sourceMetadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference</a>

---

##### `targetMetadata`<sup>Required</sup> <a name="targetMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadata"></a>

```typescript
public readonly targetMetadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference</a>

---

##### `sourceMetadataInput`<sup>Optional</sup> <a name="sourceMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.sourceMetadataInput"></a>

```typescript
public readonly sourceMetadataInput: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---

##### `targetMetadataInput`<sup>Optional</sup> <a name="targetMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.targetMetadataInput"></a>

```typescript
public readonly targetMetadataInput: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool">resetCaptureTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaptureTool` <a name="resetCaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetCaptureTool"></a>

```typescript
public resetCaptureTool(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput">captureToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool">captureTool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureToolInput`<sup>Optional</sup> <a name="captureToolInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureToolInput"></a>

```typescript
public readonly captureToolInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `captureTool`<sup>Required</sup> <a name="captureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.captureTool"></a>

```typescript
public readonly captureTool: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcSourceMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool">resetCaptureTool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaptureTool` <a name="resetCaptureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetCaptureTool"></a>

```typescript
public resetCaptureTool(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput">captureToolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool">captureTool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `captureToolInput`<sup>Optional</sup> <a name="captureToolInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureToolInput"></a>

```typescript
public readonly captureToolInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `captureTool`<sup>Required</sup> <a name="captureTool" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.captureTool"></a>

```typescript
public readonly captureTool: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcTargetMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get"></a>

```typescript
public get(index: number): ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid">resetCcsid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength">resetLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCcsid` <a name="resetCcsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetCcsid"></a>

```typescript
public resetCcsid(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetLength` <a name="resetLength" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetLength"></a>

```typescript
public resetLength(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput">ccsidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid">ccsid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ccsidInput`<sup>Optional</sup> <a name="ccsidInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsidInput"></a>

```typescript
public readonly ccsidInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `ccsid`<sup>Required</sup> <a name="ccsid" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.ccsid"></a>

```typescript
public readonly ccsid: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc">putDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets">putDataSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc">resetDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets">resetDataSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseCdc` <a name="putDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc"></a>

```typescript
public putDatabaseCdc(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDatabaseCdc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---

##### `putDataSets` <a name="putDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets"></a>

```typescript
public putDataSets(value: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.putDataSets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

---

##### `resetDatabaseCdc` <a name="resetDatabaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDatabaseCdc"></a>

```typescript
public resetDatabaseCdc(): void
```

##### `resetDataSets` <a name="resetDataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.resetDataSets"></a>

```typescript
public resetDataSets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc">databaseCdc</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets">dataSets</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput">databaseCdcInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput">dataSetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseCdc`<sup>Required</sup> <a name="databaseCdc" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdc"></a>

```typescript
public readonly databaseCdc: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdcOutputReference</a>

---

##### `dataSets`<sup>Required</sup> <a name="dataSets" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSets"></a>

```typescript
public readonly dataSets: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSetsList</a>

---

##### `databaseCdcInput`<sup>Optional</sup> <a name="databaseCdcInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.databaseCdcInput"></a>

```typescript
public readonly databaseCdcInput: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDatabaseCdc</a>

---

##### `dataSetsInput`<sup>Optional</sup> <a name="dataSetsInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.dataSetsInput"></a>

```typescript
public readonly dataSetsInput: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataDataSets</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---


### ApptestTestCaseStepsActionCompareActionInputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata">putFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata">resetFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation">resetSourceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation">resetTargetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFileMetadata` <a name="putFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata"></a>

```typescript
public putFileMetadata(value: ApptestTestCaseStepsActionCompareActionInputFileFileMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.putFileMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---

##### `resetFileMetadata` <a name="resetFileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetFileMetadata"></a>

```typescript
public resetFileMetadata(): void
```

##### `resetSourceLocation` <a name="resetSourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetSourceLocation"></a>

```typescript
public resetSourceLocation(): void
```

##### `resetTargetLocation` <a name="resetTargetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.resetTargetLocation"></a>

```typescript
public resetTargetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata">fileMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput">fileMetadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput">sourceLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput">targetLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation">sourceLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation">targetLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileMetadata`<sup>Required</sup> <a name="fileMetadata" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadata"></a>

```typescript
public readonly fileMetadata: ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference">ApptestTestCaseStepsActionCompareActionInputFileFileMetadataOutputReference</a>

---

##### `fileMetadataInput`<sup>Optional</sup> <a name="fileMetadataInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.fileMetadataInput"></a>

```typescript
public readonly fileMetadataInput: IResolvable | ApptestTestCaseStepsActionCompareActionInputFileFileMetadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileFileMetadata">ApptestTestCaseStepsActionCompareActionInputFileFileMetadata</a>

---

##### `sourceLocationInput`<sup>Optional</sup> <a name="sourceLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocationInput"></a>

```typescript
public readonly sourceLocationInput: string;
```

- *Type:* string

---

##### `targetLocationInput`<sup>Optional</sup> <a name="targetLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocationInput"></a>

```typescript
public readonly targetLocationInput: string;
```

- *Type:* string

---

##### `sourceLocation`<sup>Required</sup> <a name="sourceLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.sourceLocation"></a>

```typescript
public readonly sourceLocation: string;
```

- *Type:* string

---

##### `targetLocation`<sup>Required</sup> <a name="targetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.targetLocation"></a>

```typescript
public readonly targetLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInputFile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---


### ApptestTestCaseStepsActionCompareActionInputOutputReference <a name="ApptestTestCaseStepsActionCompareActionInputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile">resetFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFile` <a name="putFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile"></a>

```typescript
public putFile(value: ApptestTestCaseStepsActionCompareActionInputFile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---

##### `resetFile` <a name="resetFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.resetFile"></a>

```typescript
public resetFile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput">fileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.file"></a>

```typescript
public readonly file: ApptestTestCaseStepsActionCompareActionInputFileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFileOutputReference">ApptestTestCaseStepsActionCompareActionInputFileOutputReference</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: IResolvable | ApptestTestCaseStepsActionCompareActionInputFile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputFile">ApptestTestCaseStepsActionCompareActionInputFile</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---


### ApptestTestCaseStepsActionCompareActionOutputFileOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputFileOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation">resetFileLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileLocation` <a name="resetFileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.resetFileLocation"></a>

```typescript
public resetFileLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput">fileLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation">fileLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fileLocationInput`<sup>Optional</sup> <a name="fileLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocationInput"></a>

```typescript
public readonly fileLocationInput: string;
```

- *Type:* string

---

##### `fileLocation`<sup>Required</sup> <a name="fileLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.fileLocation"></a>

```typescript
public readonly fileLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionOutputFile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---


### ApptestTestCaseStepsActionCompareActionOutputOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile">putFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile">resetFile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFile` <a name="putFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile"></a>

```typescript
public putFile(value: ApptestTestCaseStepsActionCompareActionOutputFile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---

##### `resetFile` <a name="resetFile" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.resetFile"></a>

```typescript
public resetFile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file">file</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput">fileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.file"></a>

```typescript
public readonly file: ApptestTestCaseStepsActionCompareActionOutputFileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFileOutputReference">ApptestTestCaseStepsActionCompareActionOutputFileOutputReference</a>

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: IResolvable | ApptestTestCaseStepsActionCompareActionOutputFile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputFile">ApptestTestCaseStepsActionCompareActionOutputFile</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareActionOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---


### ApptestTestCaseStepsActionCompareActionOutputReference <a name="ApptestTestCaseStepsActionCompareActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput">resetOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInput` <a name="putInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput"></a>

```typescript
public putInput(value: ApptestTestCaseStepsActionCompareActionInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput"></a>

```typescript
public putOutput(value: ApptestTestCaseStepsActionCompareActionOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---

##### `resetInput` <a name="resetInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.resetOutput"></a>

```typescript
public resetOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput">inputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput">outputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.input"></a>

```typescript
public readonly input: ApptestTestCaseStepsActionCompareActionInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInputOutputReference">ApptestTestCaseStepsActionCompareActionInputOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.output"></a>

```typescript
public readonly output: ApptestTestCaseStepsActionCompareActionOutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputOutputReference">ApptestTestCaseStepsActionCompareActionOutputOutputReference</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: IResolvable | ApptestTestCaseStepsActionCompareActionInput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionInput">ApptestTestCaseStepsActionCompareActionInput</a>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: IResolvable | ApptestTestCaseStepsActionCompareActionOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutput">ApptestTestCaseStepsActionCompareActionOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionCompareAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName">resetBatchJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters">resetBatchJobParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames">resetExportDataSetNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBatchJobName` <a name="resetBatchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobName"></a>

```typescript
public resetBatchJobName(): void
```

##### `resetBatchJobParameters` <a name="resetBatchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetBatchJobParameters"></a>

```typescript
public resetBatchJobParameters(): void
```

##### `resetExportDataSetNames` <a name="resetExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.resetExportDataSetNames"></a>

```typescript
public resetExportDataSetNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput">batchJobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput">batchJobParametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput">exportDataSetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName">batchJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters">batchJobParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames">exportDataSetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batchJobNameInput`<sup>Optional</sup> <a name="batchJobNameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobNameInput"></a>

```typescript
public readonly batchJobNameInput: string;
```

- *Type:* string

---

##### `batchJobParametersInput`<sup>Optional</sup> <a name="batchJobParametersInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParametersInput"></a>

```typescript
public readonly batchJobParametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exportDataSetNamesInput`<sup>Optional</sup> <a name="exportDataSetNamesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNamesInput"></a>

```typescript
public readonly exportDataSetNamesInput: string[];
```

- *Type:* string[]

---

##### `batchJobName`<sup>Required</sup> <a name="batchJobName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobName"></a>

```typescript
public readonly batchJobName: string;
```

- *Type:* string

---

##### `batchJobParameters`<sup>Required</sup> <a name="batchJobParameters" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.batchJobParameters"></a>

```typescript
public readonly batchJobParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `exportDataSetNames`<sup>Required</sup> <a name="exportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.exportDataSetNames"></a>

```typescript
public readonly exportDataSetNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeBatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch">putBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270">putTn3270</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch">resetBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270">resetTn3270</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBatch` <a name="putBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch"></a>

```typescript
public putBatch(value: ApptestTestCaseStepsActionMainframeActionActionTypeBatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putBatch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---

##### `putTn3270` <a name="putTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270"></a>

```typescript
public putTn3270(value: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.putTn3270.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---

##### `resetBatch` <a name="resetBatch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetBatch"></a>

```typescript
public resetBatch(): void
```

##### `resetTn3270` <a name="resetTn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.resetTn3270"></a>

```typescript
public resetTn3270(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch">batch</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270">tn3270</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput">batchInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input">tn3270Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `batch`<sup>Required</sup> <a name="batch" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batch"></a>

```typescript
public readonly batch: ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeBatchOutputReference</a>

---

##### `tn3270`<sup>Required</sup> <a name="tn3270" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270"></a>

```typescript
public readonly tn3270: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference</a>

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.batchInput"></a>

```typescript
public readonly batchInput: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeBatch;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeBatch">ApptestTestCaseStepsActionMainframeActionActionTypeBatch</a>

---

##### `tn3270Input`<sup>Optional</sup> <a name="tn3270Input" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.tn3270Input"></a>

```typescript
public readonly tn3270Input: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionMainframeActionActionType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript">putScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames">resetExportDataSetNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript">resetScript</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScript` <a name="putScript" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript"></a>

```typescript
public putScript(value: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---

##### `resetExportDataSetNames` <a name="resetExportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetExportDataSetNames"></a>

```typescript
public resetExportDataSetNames(): void
```

##### `resetScript` <a name="resetScript" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.resetScript"></a>

```typescript
public resetScript(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script">script</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput">exportDataSetNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput">scriptInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames">exportDataSetNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.script"></a>

```typescript
public readonly script: ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference</a>

---

##### `exportDataSetNamesInput`<sup>Optional</sup> <a name="exportDataSetNamesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNamesInput"></a>

```typescript
public readonly exportDataSetNamesInput: string[];
```

- *Type:* string[]

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---

##### `exportDataSetNames`<sup>Required</sup> <a name="exportDataSetNames" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.exportDataSetNames"></a>

```typescript
public readonly exportDataSetNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270</a>

---


### ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference <a name="ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation">resetScriptLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScriptLocation` <a name="resetScriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetScriptLocation"></a>

```typescript
public resetScriptLocation(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput">scriptLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation">scriptLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptLocationInput`<sup>Optional</sup> <a name="scriptLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocationInput"></a>

```typescript
public readonly scriptLocationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `scriptLocation`<sup>Required</sup> <a name="scriptLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.scriptLocation"></a>

```typescript
public readonly scriptLocation: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270ScriptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script">ApptestTestCaseStepsActionMainframeActionActionTypeTn3270Script</a>

---


### ApptestTestCaseStepsActionMainframeActionOutputReference <a name="ApptestTestCaseStepsActionMainframeActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType">putActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActionType` <a name="putActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType"></a>

```typescript
public putActionType(value: ApptestTestCaseStepsActionMainframeActionActionType): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putActionType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties"></a>

```typescript
public putProperties(value: ApptestTestCaseStepsActionMainframeActionProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---

##### `resetActionType` <a name="resetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetResource` <a name="resetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType">actionType</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionType"></a>

```typescript
public readonly actionType: ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference">ApptestTestCaseStepsActionMainframeActionActionTypeOutputReference</a>

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.properties"></a>

```typescript
public readonly properties: ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference">ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: IResolvable | ApptestTestCaseStepsActionMainframeActionActionType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionActionType">ApptestTestCaseStepsActionMainframeActionActionType</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | ApptestTestCaseStepsActionMainframeActionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionMainframeAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---


### ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn">resetDmsTaskArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDmsTaskArn` <a name="resetDmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.resetDmsTaskArn"></a>

```typescript
public resetDmsTaskArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput">dmsTaskArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn">dmsTaskArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dmsTaskArnInput`<sup>Optional</sup> <a name="dmsTaskArnInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArnInput"></a>

```typescript
public readonly dmsTaskArnInput: string;
```

- *Type:* string

---

##### `dmsTaskArn`<sup>Required</sup> <a name="dmsTaskArn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.dmsTaskArn"></a>

```typescript
public readonly dmsTaskArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionMainframeActionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionProperties">ApptestTestCaseStepsActionMainframeActionProperties</a>

---


### ApptestTestCaseStepsActionOutputReference <a name="ApptestTestCaseStepsActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction">putCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction">putMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction">putResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction">resetCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction">resetMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction">resetResourceAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCompareAction` <a name="putCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction"></a>

```typescript
public putCompareAction(value: ApptestTestCaseStepsActionCompareAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putCompareAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---

##### `putMainframeAction` <a name="putMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction"></a>

```typescript
public putMainframeAction(value: ApptestTestCaseStepsActionMainframeAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putMainframeAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---

##### `putResourceAction` <a name="putResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction"></a>

```typescript
public putResourceAction(value: ApptestTestCaseStepsActionResourceAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.putResourceAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---

##### `resetCompareAction` <a name="resetCompareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetCompareAction"></a>

```typescript
public resetCompareAction(): void
```

##### `resetMainframeAction` <a name="resetMainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetMainframeAction"></a>

```typescript
public resetMainframeAction(): void
```

##### `resetResourceAction` <a name="resetResourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.resetResourceAction"></a>

```typescript
public resetResourceAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction">compareAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction">mainframeAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction">resourceAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput">compareActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput">mainframeActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput">resourceActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compareAction`<sup>Required</sup> <a name="compareAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareAction"></a>

```typescript
public readonly compareAction: ApptestTestCaseStepsActionCompareActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareActionOutputReference">ApptestTestCaseStepsActionCompareActionOutputReference</a>

---

##### `mainframeAction`<sup>Required</sup> <a name="mainframeAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeAction"></a>

```typescript
public readonly mainframeAction: ApptestTestCaseStepsActionMainframeActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeActionOutputReference">ApptestTestCaseStepsActionMainframeActionOutputReference</a>

---

##### `resourceAction`<sup>Required</sup> <a name="resourceAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceAction"></a>

```typescript
public readonly resourceAction: ApptestTestCaseStepsActionResourceActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference">ApptestTestCaseStepsActionResourceActionOutputReference</a>

---

##### `compareActionInput`<sup>Optional</sup> <a name="compareActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.compareActionInput"></a>

```typescript
public readonly compareActionInput: IResolvable | ApptestTestCaseStepsActionCompareAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionCompareAction">ApptestTestCaseStepsActionCompareAction</a>

---

##### `mainframeActionInput`<sup>Optional</sup> <a name="mainframeActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.mainframeActionInput"></a>

```typescript
public readonly mainframeActionInput: IResolvable | ApptestTestCaseStepsActionMainframeAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionMainframeAction">ApptestTestCaseStepsActionMainframeAction</a>

---

##### `resourceActionInput`<sup>Optional</sup> <a name="resourceActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.resourceActionInput"></a>

```typescript
public readonly resourceActionInput: IResolvable | ApptestTestCaseStepsActionResourceAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---


### ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetResource` <a name="resetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionResourceActionCloudformationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties"></a>

```typescript
public putProperties(value: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---

##### `resetActionType` <a name="resetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetResource` <a name="resetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.properties"></a>

```typescript
public readonly properties: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference</a>

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---


### ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop">resetForceStop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation">resetImportDataSetLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForceStop` <a name="resetForceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetForceStop"></a>

```typescript
public resetForceStop(): void
```

##### `resetImportDataSetLocation` <a name="resetImportDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.resetImportDataSetLocation"></a>

```typescript
public resetImportDataSetLocation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput">forceStopInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput">importDataSetLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop">forceStop</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation">importDataSetLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forceStopInput`<sup>Optional</sup> <a name="forceStopInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStopInput"></a>

```typescript
public readonly forceStopInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `importDataSetLocationInput`<sup>Optional</sup> <a name="importDataSetLocationInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocationInput"></a>

```typescript
public readonly importDataSetLocationInput: string;
```

- *Type:* string

---

##### `forceStop`<sup>Required</sup> <a name="forceStop" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.forceStop"></a>

```typescript
public readonly forceStop: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `importDataSetLocation`<sup>Required</sup> <a name="importDataSetLocation" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.importDataSetLocation"></a>

```typescript
public readonly importDataSetLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionProperties</a>

---


### ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType">resetActionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionType` <a name="resetActionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetActionType"></a>

```typescript
public resetActionType(): void
```

##### `resetResource` <a name="resetResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput">actionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionTypeInput`<sup>Optional</sup> <a name="actionTypeInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionTypeInput"></a>

```typescript
public readonly actionTypeInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---


### ApptestTestCaseStepsActionResourceActionOutputReference <a name="ApptestTestCaseStepsActionResourceActionOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction">putCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction">putM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction">putM2NonManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction">resetCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction">resetM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction">resetM2NonManagedApplicationAction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudformationAction` <a name="putCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction"></a>

```typescript
public putCloudformationAction(value: ApptestTestCaseStepsActionResourceActionCloudformationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putCloudformationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---

##### `putM2ManagedApplicationAction` <a name="putM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction"></a>

```typescript
public putM2ManagedApplicationAction(value: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2ManagedApplicationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---

##### `putM2NonManagedApplicationAction` <a name="putM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction"></a>

```typescript
public putM2NonManagedApplicationAction(value: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.putM2NonManagedApplicationAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---

##### `resetCloudformationAction` <a name="resetCloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetCloudformationAction"></a>

```typescript
public resetCloudformationAction(): void
```

##### `resetM2ManagedApplicationAction` <a name="resetM2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2ManagedApplicationAction"></a>

```typescript
public resetM2ManagedApplicationAction(): void
```

##### `resetM2NonManagedApplicationAction` <a name="resetM2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.resetM2NonManagedApplicationAction"></a>

```typescript
public resetM2NonManagedApplicationAction(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction">cloudformationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction">m2ManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction">m2NonManagedApplicationAction</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput">cloudformationActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput">m2ManagedApplicationActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput">m2NonManagedApplicationActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudformationAction`<sup>Required</sup> <a name="cloudformationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationAction"></a>

```typescript
public readonly cloudformationAction: ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference">ApptestTestCaseStepsActionResourceActionCloudformationActionOutputReference</a>

---

##### `m2ManagedApplicationAction`<sup>Required</sup> <a name="m2ManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationAction"></a>

```typescript
public readonly m2ManagedApplicationAction: ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationActionOutputReference</a>

---

##### `m2NonManagedApplicationAction`<sup>Required</sup> <a name="m2NonManagedApplicationAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationAction"></a>

```typescript
public readonly m2NonManagedApplicationAction: ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationActionOutputReference</a>

---

##### `cloudformationActionInput`<sup>Optional</sup> <a name="cloudformationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.cloudformationActionInput"></a>

```typescript
public readonly cloudformationActionInput: IResolvable | ApptestTestCaseStepsActionResourceActionCloudformationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionCloudformationAction">ApptestTestCaseStepsActionResourceActionCloudformationAction</a>

---

##### `m2ManagedApplicationActionInput`<sup>Optional</sup> <a name="m2ManagedApplicationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2ManagedApplicationActionInput"></a>

```typescript
public readonly m2ManagedApplicationActionInput: IResolvable | ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2ManagedApplicationAction</a>

---

##### `m2NonManagedApplicationActionInput`<sup>Optional</sup> <a name="m2NonManagedApplicationActionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.m2NonManagedApplicationActionInput"></a>

```typescript
public readonly m2NonManagedApplicationActionInput: IResolvable | ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction">ApptestTestCaseStepsActionResourceActionM2NonManagedApplicationAction</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseStepsActionResourceAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionResourceAction">ApptestTestCaseStepsActionResourceAction</a>

---


### ApptestTestCaseStepsList <a name="ApptestTestCaseStepsList" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get"></a>

```typescript
public get(index: number): ApptestTestCaseStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseSteps[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>[]

---


### ApptestTestCaseStepsOutputReference <a name="ApptestTestCaseStepsOutputReference" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer"></a>

```typescript
import { apptestTestCase } from '@cdktn/provider-awscc'

new apptestTestCase.ApptestTestCaseStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction"></a>

```typescript
public putAction(value: ApptestTestCaseStepsAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput">actionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.action"></a>

```typescript
public readonly action: ApptestTestCaseStepsActionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsActionOutputReference">ApptestTestCaseStepsActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | ApptestTestCaseStepsAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsAction">ApptestTestCaseStepsAction</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApptestTestCaseSteps;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apptestTestCase.ApptestTestCaseSteps">ApptestTestCaseSteps</a>

---



