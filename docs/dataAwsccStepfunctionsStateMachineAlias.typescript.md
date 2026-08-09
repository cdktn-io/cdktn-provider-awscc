# `dataAwsccStepfunctionsStateMachineAlias` Submodule <a name="`dataAwsccStepfunctionsStateMachineAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccStepfunctionsStateMachineAlias <a name="DataAwsccStepfunctionsStateMachineAlias" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/stepfunctions_state_machine_alias awscc_stepfunctions_state_machine_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias(scope: Construct, id: string, config: DataAwsccStepfunctionsStateMachineAliasConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig">DataAwsccStepfunctionsStateMachineAliasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig">DataAwsccStepfunctionsStateMachineAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isConstruct"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformElement"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformDataSource"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccStepfunctionsStateMachineAlias resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccStepfunctionsStateMachineAlias to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccStepfunctionsStateMachineAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/stepfunctions_state_machine_alias#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccStepfunctionsStateMachineAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.deploymentPreference">deploymentPreference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.routingConfiguration">routingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList">DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.stateMachineArn">stateMachineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deploymentPreference`<sup>Required</sup> <a name="deploymentPreference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.deploymentPreference"></a>

```typescript
public readonly deploymentPreference: DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routingConfiguration`<sup>Required</sup> <a name="routingConfiguration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.routingConfiguration"></a>

```typescript
public readonly routingConfiguration: DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList">DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList</a>

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAlias.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccStepfunctionsStateMachineAliasConfig <a name="DataAwsccStepfunctionsStateMachineAliasConfig" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineAliasConfig: dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/stepfunctions_state_machine_alias#id DataAwsccStepfunctionsStateMachineAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccStepfunctionsStateMachineAliasDeploymentPreference <a name="DataAwsccStepfunctionsStateMachineAliasDeploymentPreference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineAliasDeploymentPreference: dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference = { ... }
```


### DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration <a name="DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

const dataAwsccStepfunctionsStateMachineAliasRoutingConfiguration: dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference <a name="DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms">alarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage">percentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarms`<sup>Required</sup> <a name="alarms" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.alarms"></a>

```typescript
public readonly alarms: string[];
```

- *Type:* string[]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.percentage"></a>

```typescript
public readonly percentage: number;
```

- *Type:* number

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.stateMachineVersionArn"></a>

```typescript
public readonly stateMachineVersionArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineAliasDeploymentPreference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasDeploymentPreference">DataAwsccStepfunctionsStateMachineAliasDeploymentPreference</a>

---


### DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList <a name="DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference <a name="DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccStepfunctionsStateMachineAlias } from '@cdktn/provider-awscc'

new dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn">stateMachineVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration">DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateMachineVersionArn`<sup>Required</sup> <a name="stateMachineVersionArn" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.stateMachineVersionArn"></a>

```typescript
public readonly stateMachineVersionArn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccStepfunctionsStateMachineAlias.DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration">DataAwsccStepfunctionsStateMachineAliasRoutingConfiguration</a>

---



