# `dataAwsccCleanroomsPrivacyBudgetTemplate` Submodule <a name="`dataAwsccCleanroomsPrivacyBudgetTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplate <a name="DataAwsccCleanroomsPrivacyBudgetTemplate" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cleanrooms_privacy_budget_template awscc_cleanrooms_privacy_budget_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate(scope: Construct, id: string, config: DataAwsccCleanroomsPrivacyBudgetTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig">DataAwsccCleanroomsPrivacyBudgetTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig">DataAwsccCleanroomsPrivacyBudgetTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCleanroomsPrivacyBudgetTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCleanroomsPrivacyBudgetTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCleanroomsPrivacyBudgetTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cleanrooms_privacy_budget_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsPrivacyBudgetTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationArn">collaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier">collaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipArn">membershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipIdentifier">membershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference">DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier">privacyBudgetTemplateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetType">privacyBudgetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList">DataAwsccCleanroomsPrivacyBudgetTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

---

##### `collaborationArn`<sup>Required</sup> <a name="collaborationArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationArn"></a>

```typescript
public readonly collaborationArn: string;
```

- *Type:* string

---

##### `collaborationIdentifier`<sup>Required</sup> <a name="collaborationIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.collaborationIdentifier"></a>

```typescript
public readonly collaborationIdentifier: string;
```

- *Type:* string

---

##### `membershipArn`<sup>Required</sup> <a name="membershipArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipArn"></a>

```typescript
public readonly membershipArn: string;
```

- *Type:* string

---

##### `membershipIdentifier`<sup>Required</sup> <a name="membershipIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.membershipIdentifier"></a>

```typescript
public readonly membershipIdentifier: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference">DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference</a>

---

##### `privacyBudgetTemplateIdentifier`<sup>Required</sup> <a name="privacyBudgetTemplateIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetTemplateIdentifier"></a>

```typescript
public readonly privacyBudgetTemplateIdentifier: string;
```

- *Type:* string

---

##### `privacyBudgetType`<sup>Required</sup> <a name="privacyBudgetType" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.privacyBudgetType"></a>

```typescript
public readonly privacyBudgetType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tags"></a>

```typescript
public readonly tags: DataAwsccCleanroomsPrivacyBudgetTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList">DataAwsccCleanroomsPrivacyBudgetTemplateTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplateConfig <a name="DataAwsccCleanroomsPrivacyBudgetTemplateConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsPrivacyBudgetTemplateConfig: dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cleanrooms_privacy_budget_template#id DataAwsccCleanroomsPrivacyBudgetTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsPrivacyBudgetTemplateParameters <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsPrivacyBudgetTemplateParameters: dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters = { ... }
```


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters: dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters = { ... }
```


### DataAwsccCleanroomsPrivacyBudgetTemplateTags <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

const dataAwsccCleanroomsPrivacyBudgetTemplateTags: dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get"></a>

```typescript
public get(index: number): DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh">autoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget">budget</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRefresh`<sup>Required</sup> <a name="autoRefresh" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.autoRefresh"></a>

```typescript
public readonly autoRefresh: string;
```

- *Type:* string

---

##### `budget`<sup>Required</sup> <a name="budget" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.budget"></a>

```typescript
public readonly budget: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParameters</a>

---


### DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters">budgetParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon">epsilon</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery">usersNoisePerQuery</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `budgetParameters`<sup>Required</sup> <a name="budgetParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.budgetParameters"></a>

```typescript
public readonly budgetParameters: DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList">DataAwsccCleanroomsPrivacyBudgetTemplateParametersBudgetParametersList</a>

---

##### `epsilon`<sup>Required</sup> <a name="epsilon" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.epsilon"></a>

```typescript
public readonly epsilon: number;
```

- *Type:* number

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `usersNoisePerQuery`<sup>Required</sup> <a name="usersNoisePerQuery" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.usersNoisePerQuery"></a>

```typescript
public readonly usersNoisePerQuery: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsPrivacyBudgetTemplateParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateParameters">DataAwsccCleanroomsPrivacyBudgetTemplateParameters</a>

---


### DataAwsccCleanroomsPrivacyBudgetTemplateTagsList <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference <a name="DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCleanroomsPrivacyBudgetTemplate } from '@cdktn/provider-awscc'

new dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags">DataAwsccCleanroomsPrivacyBudgetTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCleanroomsPrivacyBudgetTemplateTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsPrivacyBudgetTemplate.DataAwsccCleanroomsPrivacyBudgetTemplateTags">DataAwsccCleanroomsPrivacyBudgetTemplateTags</a>

---



