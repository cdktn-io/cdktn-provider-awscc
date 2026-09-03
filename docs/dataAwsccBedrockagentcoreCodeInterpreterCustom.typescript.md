# `dataAwsccBedrockagentcoreCodeInterpreterCustom` Submodule <a name="`dataAwsccBedrockagentcoreCodeInterpreterCustom` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockagentcoreCodeInterpreterCustom <a name="DataAwsccBedrockagentcoreCodeInterpreterCustom" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrockagentcore_code_interpreter_custom awscc_bedrockagentcore_code_interpreter_custom}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom(scope: Construct, id: string, config: DataAwsccBedrockagentcoreCodeInterpreterCustomConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isConstruct"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformElement"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformDataSource"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccBedrockagentcoreCodeInterpreterCustom resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockagentcoreCodeInterpreterCustom to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockagentcoreCodeInterpreterCustom that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrockagentcore_code_interpreter_custom#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockagentcoreCodeInterpreterCustom to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn">codeInterpreterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId">codeInterpreterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.certificates"></a>

```typescript
public readonly certificates: DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList</a>

---

##### `codeInterpreterArn`<sup>Required</sup> <a name="codeInterpreterArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterArn"></a>

```typescript
public readonly codeInterpreterArn: string;
```

- *Type:* string

---

##### `codeInterpreterId`<sup>Required</sup> <a name="codeInterpreterId" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.codeInterpreterId"></a>

```typescript
public readonly codeInterpreterId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustom.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCodeInterpreterCustomCertificates: dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates = { ... }
```


### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation: dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation = { ... }
```


### DataAwsccBedrockagentcoreCodeInterpreterCustomConfig <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCodeInterpreterCustomConfig: dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/bedrockagentcore_code_interpreter_custom#id DataAwsccBedrockagentcoreCodeInterpreterCustom#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration: dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration = { ... }
```


### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

const dataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig: dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocation</a>

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.get"></a>

```typescript
public get(index: number): DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation">certificateLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateLocation`<sup>Required</sup> <a name="certificateLocation" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.certificateLocation"></a>

```typescript
public readonly certificateLocation: DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesCertificateLocationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates">DataAwsccBedrockagentcoreCodeInterpreterCustomCertificates</a>

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfiguration</a>

---


### DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference <a name="DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccBedrockagentcoreCodeInterpreterCustom } from '@cdktn/provider-awscc'

new dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockagentcoreCodeInterpreterCustom.DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig">DataAwsccBedrockagentcoreCodeInterpreterCustomNetworkConfigurationVpcConfig</a>

---



