# `dataAwsccBudgetsBudgetsAction` Submodule <a name="`dataAwsccBudgetsBudgetsAction` Submodule" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBudgetsBudgetsAction <a name="DataAwsccBudgetsBudgetsAction" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/budgets_budgets_action awscc_budgets_budgets_action}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction(scope: Construct, id: string, config: DataAwsccBudgetsBudgetsActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig">DataAwsccBudgetsBudgetsActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig">DataAwsccBudgetsBudgetsActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBudgetsBudgetsAction resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBudgetsBudgetsAction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBudgetsBudgetsAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBudgetsBudgetsAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/budgets_budgets_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBudgetsBudgetsAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionId">actionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionThreshold">actionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference">DataAwsccBudgetsBudgetsActionActionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionType">actionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.approvalModel">approvalModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.budgetName">budgetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.resourceTags">resourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList">DataAwsccBudgetsBudgetsActionResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.subscribers">subscribers</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList">DataAwsccBudgetsBudgetsActionSubscribersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `actionId`<sup>Required</sup> <a name="actionId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionId"></a>

```typescript
public readonly actionId: string;
```

- *Type:* string

---

##### `actionThreshold`<sup>Required</sup> <a name="actionThreshold" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionThreshold"></a>

```typescript
public readonly actionThreshold: DataAwsccBudgetsBudgetsActionActionThresholdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference">DataAwsccBudgetsBudgetsActionActionThresholdOutputReference</a>

---

##### `actionType`<sup>Required</sup> <a name="actionType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.actionType"></a>

```typescript
public readonly actionType: string;
```

- *Type:* string

---

##### `approvalModel`<sup>Required</sup> <a name="approvalModel" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.approvalModel"></a>

```typescript
public readonly approvalModel: string;
```

- *Type:* string

---

##### `budgetName`<sup>Required</sup> <a name="budgetName" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.budgetName"></a>

```typescript
public readonly budgetName: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.definition"></a>

```typescript
public readonly definition: DataAwsccBudgetsBudgetsActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionOutputReference</a>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `resourceTags`<sup>Required</sup> <a name="resourceTags" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.resourceTags"></a>

```typescript
public readonly resourceTags: DataAwsccBudgetsBudgetsActionResourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList">DataAwsccBudgetsBudgetsActionResourceTagsList</a>

---

##### `subscribers`<sup>Required</sup> <a name="subscribers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.subscribers"></a>

```typescript
public readonly subscribers: DataAwsccBudgetsBudgetsActionSubscribersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList">DataAwsccBudgetsBudgetsActionSubscribersList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBudgetsBudgetsActionActionThreshold <a name="DataAwsccBudgetsBudgetsActionActionThreshold" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionActionThreshold: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold = { ... }
```


### DataAwsccBudgetsBudgetsActionConfig <a name="DataAwsccBudgetsBudgetsActionConfig" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionConfig: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/budgets_budgets_action#id DataAwsccBudgetsBudgetsAction#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBudgetsBudgetsActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionDefinition: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition = { ... }
```


### DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition = { ... }
```


### DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition = { ... }
```


### DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition <a name="DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition = { ... }
```


### DataAwsccBudgetsBudgetsActionResourceTags <a name="DataAwsccBudgetsBudgetsActionResourceTags" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionResourceTags: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags = { ... }
```


### DataAwsccBudgetsBudgetsActionSubscribers <a name="DataAwsccBudgetsBudgetsActionSubscribers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

const dataAwsccBudgetsBudgetsActionSubscribers: dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBudgetsBudgetsActionActionThresholdOutputReference <a name="DataAwsccBudgetsBudgetsActionActionThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold">DataAwsccBudgetsBudgetsActionActionThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBudgetsBudgetsActionActionThreshold;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionActionThreshold">DataAwsccBudgetsBudgetsActionActionThreshold</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition">iamActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition">scpActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition">ssmActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition">DataAwsccBudgetsBudgetsActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamActionDefinition`<sup>Required</sup> <a name="iamActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.iamActionDefinition"></a>

```typescript
public readonly iamActionDefinition: DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionIamActionDefinitionOutputReference</a>

---

##### `scpActionDefinition`<sup>Required</sup> <a name="scpActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.scpActionDefinition"></a>

```typescript
public readonly scpActionDefinition: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference</a>

---

##### `ssmActionDefinition`<sup>Required</sup> <a name="ssmActionDefinition" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.ssmActionDefinition"></a>

```typescript
public readonly ssmActionDefinition: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBudgetsBudgetsActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinition">DataAwsccBudgetsBudgetsActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds">targetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `targetIds`<sup>Required</sup> <a name="targetIds" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.targetIds"></a>

```typescript
public readonly targetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionScpActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference <a name="DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds">instanceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype">subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceIds`<sup>Required</sup> <a name="instanceIds" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.instanceIds"></a>

```typescript
public readonly instanceIds: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subtype`<sup>Required</sup> <a name="subtype" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.subtype"></a>

```typescript
public readonly subtype: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition">DataAwsccBudgetsBudgetsActionDefinitionSsmActionDefinition</a>

---


### DataAwsccBudgetsBudgetsActionResourceTagsList <a name="DataAwsccBudgetsBudgetsActionResourceTagsList" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBudgetsBudgetsActionResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBudgetsBudgetsActionResourceTagsOutputReference <a name="DataAwsccBudgetsBudgetsActionResourceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags">DataAwsccBudgetsBudgetsActionResourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBudgetsBudgetsActionResourceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionResourceTags">DataAwsccBudgetsBudgetsActionResourceTags</a>

---


### DataAwsccBudgetsBudgetsActionSubscribersList <a name="DataAwsccBudgetsBudgetsActionSubscribersList" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get"></a>

```typescript
public get(index: number): DataAwsccBudgetsBudgetsActionSubscribersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBudgetsBudgetsActionSubscribersOutputReference <a name="DataAwsccBudgetsBudgetsActionSubscribersOutputReference" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer"></a>

```typescript
import { dataAwsccBudgetsBudgetsAction } from '@cdktn/provider-awscc'

new dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers">DataAwsccBudgetsBudgetsActionSubscribers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBudgetsBudgetsActionSubscribers;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBudgetsBudgetsAction.DataAwsccBudgetsBudgetsActionSubscribers">DataAwsccBudgetsBudgetsActionSubscribers</a>

---



