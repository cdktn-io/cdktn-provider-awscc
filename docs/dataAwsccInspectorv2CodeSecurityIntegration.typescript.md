# `dataAwsccInspectorv2CodeSecurityIntegration` Submodule <a name="`dataAwsccInspectorv2CodeSecurityIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CodeSecurityIntegration <a name="DataAwsccInspectorv2CodeSecurityIntegration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration(scope: Construct, id: string, config: DataAwsccInspectorv2CodeSecurityIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig">DataAwsccInspectorv2CodeSecurityIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig">DataAwsccInspectorv2CodeSecurityIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInspectorv2CodeSecurityIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInspectorv2CodeSecurityIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CodeSecurityIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.authorizationUrl">authorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createIntegrationDetails">createIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.updateIntegrationDetails">updateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authorizationUrl`<sup>Required</sup> <a name="authorizationUrl" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.authorizationUrl"></a>

```typescript
public readonly authorizationUrl: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createIntegrationDetails`<sup>Required</sup> <a name="createIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createIntegrationDetails"></a>

```typescript
public readonly createIntegrationDetails: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a>

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateIntegrationDetails`<sup>Required</sup> <a name="updateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.updateIntegrationDetails"></a>

```typescript
public readonly updateIntegrationDetails: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CodeSecurityIntegrationConfig <a name="DataAwsccInspectorv2CodeSecurityIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CodeSecurityIntegrationConfig: dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/inspectorv2_code_security_integration#id DataAwsccInspectorv2CodeSecurityIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails: dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails = { ... }
```


### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged: dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged = { ... }
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails: dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails = { ... }
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub: dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub = { ... }
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

const dataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged: dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged">gitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gitlabSelfManaged`<sup>Required</sup> <a name="gitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```typescript
public readonly gitlabSelfManaged: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId">installationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `installationId`<sup>Required</sup> <a name="installationId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId"></a>

```typescript
public readonly installationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode">authCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authCode`<sup>Required</sup> <a name="authCode" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode"></a>

```typescript
public readonly authCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsccInspectorv2CodeSecurityIntegration } from '@cdktn/provider-awscc'

new dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github">github</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged">gitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `github`<sup>Required</sup> <a name="github" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github"></a>

```typescript
public readonly github: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a>

---

##### `gitlabSelfManaged`<sup>Required</sup> <a name="gitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```typescript
public readonly gitlabSelfManaged: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---



