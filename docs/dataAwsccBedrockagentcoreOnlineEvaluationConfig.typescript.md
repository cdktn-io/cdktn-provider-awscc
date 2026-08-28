# `dataAwsccBedrockagentcoreOnlineEvaluationConfig` Submodule <a name="`dataAwsccBedrockagentcoreOnlineEvaluationConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig(scope: Construct, id: string, config: DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreOnlineEvaluationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreOnlineEvaluationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig">clusteringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig">dataSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn">evaluationExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluators">evaluators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.executionStatus">executionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.insights">insights</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn">onlineEvaluationConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId">onlineEvaluationConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName">onlineEvaluationConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `clusteringConfig`<sup>Required</sup> <a name="clusteringConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.clusteringConfig"></a>

```typescript
public readonly clusteringConfig: DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dataSourceConfig`<sup>Required</sup> <a name="dataSourceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.dataSourceConfig"></a>

```typescript
public readonly dataSourceConfig: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `evaluationExecutionRoleArn`<sup>Required</sup> <a name="evaluationExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluationExecutionRoleArn"></a>

```typescript
public readonly evaluationExecutionRoleArn: string;
```

- *Type:* string

---

##### `evaluators`<sup>Required</sup> <a name="evaluators" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.evaluators"></a>

```typescript
public readonly evaluators: DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList</a>

---

##### `executionStatus`<sup>Required</sup> <a name="executionStatus" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.executionStatus"></a>

```typescript
public readonly executionStatus: string;
```

- *Type:* string

---

##### `insights`<sup>Required</sup> <a name="insights" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.insights"></a>

```typescript
public readonly insights: DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList</a>

---

##### `onlineEvaluationConfigArn`<sup>Required</sup> <a name="onlineEvaluationConfigArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigArn"></a>

```typescript
public readonly onlineEvaluationConfigArn: string;
```

- *Type:* string

---

##### `onlineEvaluationConfigId`<sup>Required</sup> <a name="onlineEvaluationConfigId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigId"></a>

```typescript
public readonly onlineEvaluationConfigId: string;
```

- *Type:* string

---

##### `onlineEvaluationConfigName`<sup>Required</sup> <a name="onlineEvaluationConfigName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.onlineEvaluationConfigName"></a>

```typescript
public readonly onlineEvaluationConfigName: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.rule"></a>

```typescript
public readonly rule: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tags"></a>

```typescript
public readonly tags: DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList">DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigConfig: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/bedrockagentcore_online_evaluation_config#id DataAwsccBedrockagentcoreOnlineEvaluationConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigInsights: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRule <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigRule: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig = { ... }
```


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTags <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreOnlineEvaluationConfigTags: dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies">frequencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `frequencies`<sup>Required</sup> <a name="frequencies" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.frequencies"></a>

```typescript
public readonly frequencies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigClusteringConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames">logGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames">serviceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupNames`<sup>Required</sup> <a name="logGroupNames" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.logGroupNames"></a>

```typescript
public readonly logGroupNames: string[];
```

- *Type:* string[]

---

##### `serviceNames`<sup>Required</sup> <a name="serviceNames" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.serviceNames"></a>

```typescript
public readonly serviceNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogs</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigCloudwatchLogsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigDataSourceConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId">evaluatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `evaluatorId`<sup>Required</sup> <a name="evaluatorId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.evaluatorId"></a>

```typescript
public readonly evaluatorId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluatorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators">DataAwsccBedrockagentcoreOnlineEvaluationConfigEvaluators</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId">insightId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `insightId`<sup>Required</sup> <a name="insightId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.insightId"></a>

```typescript
public readonly insightId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights">DataAwsccBedrockagentcoreOnlineEvaluationConfigInsights</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig">cloudwatchConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchConfig`<sup>Required</sup> <a name="cloudwatchConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.cloudwatchConfig"></a>

```typescript
public readonly cloudwatchConfig: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigCloudwatchConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigOutputConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.value"></a>

```typescript
public readonly value: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFilters</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue">booleanValue</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue">doubleValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue">stringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `booleanValue`<sup>Required</sup> <a name="booleanValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.booleanValue"></a>

```typescript
public readonly booleanValue: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `doubleValue`<sup>Required</sup> <a name="doubleValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.doubleValue"></a>

```typescript
public readonly doubleValue: number;
```

- *Type:* number

---

##### `stringValue`<sup>Required</sup> <a name="stringValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.stringValue"></a>

```typescript
public readonly stringValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersValue</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters">filters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig">samplingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig">sessionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule">DataAwsccBedrockagentcoreOnlineEvaluationConfigRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.filters"></a>

```typescript
public readonly filters: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleFiltersList</a>

---

##### `samplingConfig`<sup>Required</sup> <a name="samplingConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.samplingConfig"></a>

```typescript
public readonly samplingConfig: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference</a>

---

##### `sessionConfig`<sup>Required</sup> <a name="sessionConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.sessionConfig"></a>

```typescript
public readonly sessionConfig: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRule">DataAwsccBedrockagentcoreOnlineEvaluationConfigRule</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSamplingConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.sessionTimeoutMinutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig">DataAwsccBedrockagentcoreOnlineEvaluationConfigRuleSessionConfig</a>

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference <a name="DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreOnlineEvaluationConfig } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags">DataAwsccBedrockagentcoreOnlineEvaluationConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreOnlineEvaluationConfigTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreOnlineEvaluationConfig.DataAwsccBedrockagentcoreOnlineEvaluationConfigTags">DataAwsccBedrockagentcoreOnlineEvaluationConfigTags</a>

---



