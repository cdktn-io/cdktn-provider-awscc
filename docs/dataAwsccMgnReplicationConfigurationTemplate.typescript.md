# `dataAwsccMgnReplicationConfigurationTemplate` Submodule <a name="`dataAwsccMgnReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMgnReplicationConfigurationTemplate <a name="DataAwsccMgnReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template awscc_mgn_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate(scope: Construct, id: string, config: DataAwsccMgnReplicationConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig">DataAwsccMgnReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig">DataAwsccMgnReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMgnReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMgnReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMgnReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMgnReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp">createPublicIp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption">ebsEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol">internetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags">stagingAreaTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone">storeSnapshotOnLocalZone</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint">useFipsEndpoint</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```typescript
public readonly associateDefaultSecurityGroup: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```typescript
public readonly bandwidthThrottling: number;
```

- *Type:* number

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.createPublicIp"></a>

```typescript
public readonly createPublicIp: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```typescript
public readonly dataPlaneRouting: string;
```

- *Type:* string

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```typescript
public readonly defaultLargeStagingDiskType: string;
```

- *Type:* string

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryption"></a>

```typescript
public readonly ebsEncryption: string;
```

- *Type:* string

---

##### `ebsEncryptionKeyArn`<sup>Required</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```typescript
public readonly ebsEncryptionKeyArn: string;
```

- *Type:* string

---

##### `internetProtocol`<sup>Required</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.internetProtocol"></a>

```typescript
public readonly internetProtocol: string;
```

- *Type:* string

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```typescript
public readonly replicationServerInstanceType: string;
```

- *Type:* string

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```typescript
public readonly replicationServersSecurityGroupsIDs: string[];
```

- *Type:* string[]

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```typescript
public readonly stagingAreaSubnetId: string;
```

- *Type:* string

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```typescript
public readonly stagingAreaTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `storeSnapshotOnLocalZone`<sup>Required</sup> <a name="storeSnapshotOnLocalZone" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.storeSnapshotOnLocalZone"></a>

```typescript
public readonly storeSnapshotOnLocalZone: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tags"></a>

```typescript
public readonly tags: DataAwsccMgnReplicationConfigurationTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList">DataAwsccMgnReplicationConfigurationTemplateTagsList</a>

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```typescript
public readonly useDedicatedReplicationServer: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useFipsEndpoint`<sup>Required</sup> <a name="useFipsEndpoint" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.useFipsEndpoint"></a>

```typescript
public readonly useFipsEndpoint: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMgnReplicationConfigurationTemplateConfig <a name="DataAwsccMgnReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccMgnReplicationConfigurationTemplateConfig: dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/mgn_replication_configuration_template#id DataAwsccMgnReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMgnReplicationConfigurationTemplateTags <a name="DataAwsccMgnReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags.Initializer"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccMgnReplicationConfigurationTemplateTags: dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMgnReplicationConfigurationTemplateTagsList <a name="DataAwsccMgnReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get"></a>

```typescript
public get(index: number): DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccMgnReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccMgnReplicationConfigurationTemplateTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMgnReplicationConfigurationTemplate.DataAwsccMgnReplicationConfigurationTemplateTags">DataAwsccMgnReplicationConfigurationTemplateTags</a>

---



