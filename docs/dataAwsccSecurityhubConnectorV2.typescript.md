# `dataAwsccSecurityhubConnectorV2` Submodule <a name="`dataAwsccSecurityhubConnectorV2` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityhubConnectorV2 <a name="DataAwsccSecurityhubConnectorV2" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_connector_v2 awscc_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2(scope: Construct, id: string, config: DataAwsccSecurityhubConnectorV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config">DataAwsccSecurityhubConnectorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config">DataAwsccSecurityhubConnectorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isConstruct"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformElement"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformDataSource"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSecurityhubConnectorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorId">connectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorStatus">connectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatus">enablementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatusReason">enablementStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.issues">issues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList">DataAwsccSecurityhubConnectorV2IssuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastCheckedAt">lastCheckedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.providerName">providerName</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `connectorId`<sup>Required</sup> <a name="connectorId" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorId"></a>

```typescript
public readonly connectorId: string;
```

- *Type:* string

---

##### `connectorStatus`<sup>Required</sup> <a name="connectorStatus" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.connectorStatus"></a>

```typescript
public readonly connectorStatus: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enablementStatus`<sup>Required</sup> <a name="enablementStatus" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatus"></a>

```typescript
public readonly enablementStatus: string;
```

- *Type:* string

---

##### `enablementStatusReason`<sup>Required</sup> <a name="enablementStatusReason" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.enablementStatusReason"></a>

```typescript
public readonly enablementStatusReason: string;
```

- *Type:* string

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.issues"></a>

```typescript
public readonly issues: DataAwsccSecurityhubConnectorV2IssuesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList">DataAwsccSecurityhubConnectorV2IssuesList</a>

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `lastCheckedAt`<sup>Required</sup> <a name="lastCheckedAt" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastCheckedAt"></a>

```typescript
public readonly lastCheckedAt: string;
```

- *Type:* string

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.lastUpdatedAt"></a>

```typescript
public readonly lastUpdatedAt: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.providerName"></a>

```typescript
public readonly providerName: DataAwsccSecurityhubConnectorV2ProviderNameOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityhubConnectorV2Config <a name="DataAwsccSecurityhubConnectorV2Config" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

const dataAwsccSecurityhubConnectorV2Config: dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/securityhub_connector_v2#id DataAwsccSecurityhubConnectorV2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityhubConnectorV2Issues <a name="DataAwsccSecurityhubConnectorV2Issues" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

const dataAwsccSecurityhubConnectorV2Issues: dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues = { ... }
```


### DataAwsccSecurityhubConnectorV2ProviderName <a name="DataAwsccSecurityhubConnectorV2ProviderName" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

const dataAwsccSecurityhubConnectorV2ProviderName: dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName = { ... }
```


### DataAwsccSecurityhubConnectorV2ProviderNameAzure <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzure" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

const dataAwsccSecurityhubConnectorV2ProviderNameAzure: dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure = { ... }
```


### DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

const dataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration: dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration = { ... }
```


### DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud <a name="DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

const dataAwsccSecurityhubConnectorV2ProviderNameJiraCloud: dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud = { ... }
```


### DataAwsccSecurityhubConnectorV2ProviderNameServiceNow <a name="DataAwsccSecurityhubConnectorV2ProviderNameServiceNow" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

const dataAwsccSecurityhubConnectorV2ProviderNameServiceNow: dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityhubConnectorV2IssuesList <a name="DataAwsccSecurityhubConnectorV2IssuesList" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.get"></a>

```typescript
public get(index: number): DataAwsccSecurityhubConnectorV2IssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSecurityhubConnectorV2IssuesOutputReference <a name="DataAwsccSecurityhubConnectorV2IssuesOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues">DataAwsccSecurityhubConnectorV2Issues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2IssuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityhubConnectorV2Issues;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2Issues">DataAwsccSecurityhubConnectorV2Issues</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn">awsConfigConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions">azureRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure">DataAwsccSecurityhubConnectorV2ProviderNameAzure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsConfigConnectorArn`<sup>Required</sup> <a name="awsConfigConnectorArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.awsConfigConnectorArn"></a>

```typescript
public readonly awsConfigConnectorArn: string;
```

- *Type:* string

---

##### `azureRegions`<sup>Required</sup> <a name="azureRegions" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.azureRegions"></a>

```typescript
public readonly azureRegions: string[];
```

- *Type:* string[]

---

##### `scopeConfiguration`<sup>Required</sup> <a name="scopeConfiguration" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.scopeConfiguration"></a>

```typescript
public readonly scopeConfiguration: DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityhubConnectorV2ProviderNameAzure;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzure">DataAwsccSecurityhubConnectorV2ProviderNameAzure</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType">scopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues">scopeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopeType`<sup>Required</sup> <a name="scopeType" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeType"></a>

```typescript
public readonly scopeType: string;
```

- *Type:* string

---

##### `scopeValues`<sup>Required</sup> <a name="scopeValues" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.scopeValues"></a>

```typescript
public readonly scopeValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration">DataAwsccSecurityhubConnectorV2ProviderNameAzureScopeConfiguration</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey">projectKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `projectKey`<sup>Required</sup> <a name="projectKey" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.projectKey"></a>

```typescript
public readonly projectKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloud</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.azure">azure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud">jiraCloud</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow">serviceNow</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName">DataAwsccSecurityhubConnectorV2ProviderName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azure`<sup>Required</sup> <a name="azure" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.azure"></a>

```typescript
public readonly azure: DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameAzureOutputReference</a>

---

##### `jiraCloud`<sup>Required</sup> <a name="jiraCloud" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.jiraCloud"></a>

```typescript
public readonly jiraCloud: DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameJiraCloudOutputReference</a>

---

##### `serviceNow`<sup>Required</sup> <a name="serviceNow" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.serviceNow"></a>

```typescript
public readonly serviceNow: DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference">DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityhubConnectorV2ProviderName;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderName">DataAwsccSecurityhubConnectorV2ProviderName</a>

---


### DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference <a name="DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer"></a>

```typescript
import { dataAwsccSecurityhubConnectorV2 } from '@cdktn/provider-awscc'

new dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName">instanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow">DataAwsccSecurityhubConnectorV2ProviderNameServiceNow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.instanceName"></a>

```typescript
public readonly instanceName: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSecurityhubConnectorV2ProviderNameServiceNow;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityhubConnectorV2.DataAwsccSecurityhubConnectorV2ProviderNameServiceNow">DataAwsccSecurityhubConnectorV2ProviderNameServiceNow</a>

---



