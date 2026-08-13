# `dataAwsccDatasyncLocationSmb` Submodule <a name="`dataAwsccDatasyncLocationSmb` Submodule" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatasyncLocationSmb <a name="DataAwsccDatasyncLocationSmb" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_smb awscc_datasync_location_smb}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb(scope: Construct, id: string, config: DataAwsccDatasyncLocationSmbConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig">DataAwsccDatasyncLocationSmbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig">DataAwsccDatasyncLocationSmbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatasyncLocationSmb resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isConstruct"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformElement"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformDataSource"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.generateConfigForImport"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDatasyncLocationSmb resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatasyncLocationSmb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatasyncLocationSmb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_smb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatasyncLocationSmb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.cmkSecretConfig">cmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference">DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.customSecretConfig">customSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference">DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.kerberosKeytab">kerberosKeytab</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.kerberosKrb5Conf">kerberosKrb5Conf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.kerberosPrincipal">kerberosPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.locationArn">locationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.managedSecretConfig">managedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference">DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference">DataAwsccDatasyncLocationSmbMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.serverHostname">serverHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList">DataAwsccDatasyncLocationSmbTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `cmkSecretConfig`<sup>Required</sup> <a name="cmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.cmkSecretConfig"></a>

```typescript
public readonly cmkSecretConfig: DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference">DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference</a>

---

##### `customSecretConfig`<sup>Required</sup> <a name="customSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.customSecretConfig"></a>

```typescript
public readonly customSecretConfig: DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference">DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference</a>

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `kerberosKeytab`<sup>Required</sup> <a name="kerberosKeytab" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.kerberosKeytab"></a>

```typescript
public readonly kerberosKeytab: string;
```

- *Type:* string

---

##### `kerberosKrb5Conf`<sup>Required</sup> <a name="kerberosKrb5Conf" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.kerberosKrb5Conf"></a>

```typescript
public readonly kerberosKrb5Conf: string;
```

- *Type:* string

---

##### `kerberosPrincipal`<sup>Required</sup> <a name="kerberosPrincipal" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.kerberosPrincipal"></a>

```typescript
public readonly kerberosPrincipal: string;
```

- *Type:* string

---

##### `locationArn`<sup>Required</sup> <a name="locationArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.locationArn"></a>

```typescript
public readonly locationArn: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `managedSecretConfig`<sup>Required</sup> <a name="managedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.managedSecretConfig"></a>

```typescript
public readonly managedSecretConfig: DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference">DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference</a>

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.mountOptions"></a>

```typescript
public readonly mountOptions: DataAwsccDatasyncLocationSmbMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference">DataAwsccDatasyncLocationSmbMountOptionsOutputReference</a>

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.tags"></a>

```typescript
public readonly tags: DataAwsccDatasyncLocationSmbTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList">DataAwsccDatasyncLocationSmbTagsList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmb.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatasyncLocationSmbCmkSecretConfig <a name="DataAwsccDatasyncLocationSmbCmkSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationSmbCmkSecretConfig: dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfig = { ... }
```


### DataAwsccDatasyncLocationSmbConfig <a name="DataAwsccDatasyncLocationSmbConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationSmbConfig: dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/datasync_location_smb#id DataAwsccDatasyncLocationSmb#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatasyncLocationSmbCustomSecretConfig <a name="DataAwsccDatasyncLocationSmbCustomSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationSmbCustomSecretConfig: dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfig = { ... }
```


### DataAwsccDatasyncLocationSmbManagedSecretConfig <a name="DataAwsccDatasyncLocationSmbManagedSecretConfig" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfig.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationSmbManagedSecretConfig: dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfig = { ... }
```


### DataAwsccDatasyncLocationSmbMountOptions <a name="DataAwsccDatasyncLocationSmbMountOptions" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptions.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationSmbMountOptions: dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptions = { ... }
```


### DataAwsccDatasyncLocationSmbTags <a name="DataAwsccDatasyncLocationSmbTags" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTags.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

const dataAwsccDatasyncLocationSmbTags: dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference <a name="DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfig">DataAwsccDatasyncLocationSmbCmkSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationSmbCmkSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCmkSecretConfig">DataAwsccDatasyncLocationSmbCmkSecretConfig</a>

---


### DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference <a name="DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn">secretAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfig">DataAwsccDatasyncLocationSmbCustomSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretAccessRoleArn`<sup>Required</sup> <a name="secretAccessRoleArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```typescript
public readonly secretAccessRoleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationSmbCustomSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbCustomSecretConfig">DataAwsccDatasyncLocationSmbCustomSecretConfig</a>

---


### DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference <a name="DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfig">DataAwsccDatasyncLocationSmbManagedSecretConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationSmbManagedSecretConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbManagedSecretConfig">DataAwsccDatasyncLocationSmbManagedSecretConfig</a>

---


### DataAwsccDatasyncLocationSmbMountOptionsOutputReference <a name="DataAwsccDatasyncLocationSmbMountOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptions">DataAwsccDatasyncLocationSmbMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationSmbMountOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbMountOptions">DataAwsccDatasyncLocationSmbMountOptions</a>

---


### DataAwsccDatasyncLocationSmbTagsList <a name="DataAwsccDatasyncLocationSmbTagsList" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDatasyncLocationSmbTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDatasyncLocationSmbTagsOutputReference <a name="DataAwsccDatasyncLocationSmbTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDatasyncLocationSmb } from '@cdktn/provider-awscc'

new dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTags">DataAwsccDatasyncLocationSmbTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDatasyncLocationSmbTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatasyncLocationSmb.DataAwsccDatasyncLocationSmbTags">DataAwsccDatasyncLocationSmbTags</a>

---



