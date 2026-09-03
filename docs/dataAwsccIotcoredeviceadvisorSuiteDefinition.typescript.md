# `dataAwsccIotcoredeviceadvisorSuiteDefinition` Submodule <a name="`dataAwsccIotcoredeviceadvisorSuiteDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotcoredeviceadvisorSuiteDefinition <a name="DataAwsccIotcoredeviceadvisorSuiteDefinition" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotcoredeviceadvisor_suite_definition awscc_iotcoredeviceadvisor_suite_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition(scope: Construct, id: string, config: DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig">DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig">DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isConstruct"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformElement"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccIotcoredeviceadvisorSuiteDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotcoredeviceadvisorSuiteDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotcoredeviceadvisorSuiteDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotcoredeviceadvisor_suite_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotcoredeviceadvisorSuiteDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn">suiteDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration">suiteDefinitionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId">suiteDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion">suiteDefinitionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList">DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `suiteDefinitionArn`<sup>Required</sup> <a name="suiteDefinitionArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionArn"></a>

```typescript
public readonly suiteDefinitionArn: string;
```

- *Type:* string

---

##### `suiteDefinitionConfiguration`<sup>Required</sup> <a name="suiteDefinitionConfiguration" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionConfiguration"></a>

```typescript
public readonly suiteDefinitionConfiguration: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference</a>

---

##### `suiteDefinitionId`<sup>Required</sup> <a name="suiteDefinitionId" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionId"></a>

```typescript
public readonly suiteDefinitionId: string;
```

- *Type:* string

---

##### `suiteDefinitionVersion`<sup>Required</sup> <a name="suiteDefinitionVersion" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.suiteDefinitionVersion"></a>

```typescript
public readonly suiteDefinitionVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tags"></a>

```typescript
public readonly tags: DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList">DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const dataAwsccIotcoredeviceadvisorSuiteDefinitionConfig: dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/iotcoredeviceadvisor_suite_definition#id DataAwsccIotcoredeviceadvisorSuiteDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration: dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration = { ... }
```


### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const dataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices: dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices = { ... }
```


### DataAwsccIotcoredeviceadvisorSuiteDefinitionTags <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionTags" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

const dataAwsccIotcoredeviceadvisorSuiteDefinitionTags: dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get"></a>

```typescript
public get(index: number): DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn">thingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `thingArn`<sup>Required</sup> <a name="thingArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.thingArn"></a>

```typescript
public readonly thingArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevices</a>

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn">devicePermissionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices">devices</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification">intendedForQualification</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup">rootGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName">suiteDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `devicePermissionRoleArn`<sup>Required</sup> <a name="devicePermissionRoleArn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devicePermissionRoleArn"></a>

```typescript
public readonly devicePermissionRoleArn: string;
```

- *Type:* string

---

##### `devices`<sup>Required</sup> <a name="devices" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.devices"></a>

```typescript
public readonly devices: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationDevicesList</a>

---

##### `intendedForQualification`<sup>Required</sup> <a name="intendedForQualification" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.intendedForQualification"></a>

```typescript
public readonly intendedForQualification: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `rootGroup`<sup>Required</sup> <a name="rootGroup" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.rootGroup"></a>

```typescript
public readonly rootGroup: string;
```

- *Type:* string

---

##### `suiteDefinitionName`<sup>Required</sup> <a name="suiteDefinitionName" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.suiteDefinitionName"></a>

```typescript
public readonly suiteDefinitionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration">DataAwsccIotcoredeviceadvisorSuiteDefinitionSuiteDefinitionConfiguration</a>

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference <a name="DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccIotcoredeviceadvisorSuiteDefinition } from '@cdktn/provider-awscc'

new dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags">DataAwsccIotcoredeviceadvisorSuiteDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccIotcoredeviceadvisorSuiteDefinitionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotcoredeviceadvisorSuiteDefinition.DataAwsccIotcoredeviceadvisorSuiteDefinitionTags">DataAwsccIotcoredeviceadvisorSuiteDefinitionTags</a>

---



