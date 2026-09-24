# `dataAwsccDrsReplicationConfigurationTemplate` Submodule <a name="`dataAwsccDrsReplicationConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDrsReplicationConfigurationTemplate <a name="DataAwsccDrsReplicationConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template awscc_drs_replication_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate(scope: Construct, id: string, config: DataAwsccDrsReplicationConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig">DataAwsccDrsReplicationConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig">DataAwsccDrsReplicationConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccDrsReplicationConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDrsReplicationConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDrsReplicationConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDrsReplicationConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup">associateDefaultSecurityGroup</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks">autoReplicateNewDisks</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling">bandwidthThrottling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp">createPublicIp</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting">dataPlaneRouting</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType">defaultLargeStagingDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption">ebsEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn">ebsEncryptionKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol">internetProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy">pitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId">replicationConfigurationTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType">replicationServerInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs">replicationServersSecurityGroupsIDs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId">stagingAreaSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags">stagingAreaTags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer">useDedicatedReplicationServer</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associateDefaultSecurityGroup`<sup>Required</sup> <a name="associateDefaultSecurityGroup" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.associateDefaultSecurityGroup"></a>

```typescript
public readonly associateDefaultSecurityGroup: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `autoReplicateNewDisks`<sup>Required</sup> <a name="autoReplicateNewDisks" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.autoReplicateNewDisks"></a>

```typescript
public readonly autoReplicateNewDisks: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `bandwidthThrottling`<sup>Required</sup> <a name="bandwidthThrottling" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.bandwidthThrottling"></a>

```typescript
public readonly bandwidthThrottling: number;
```

- *Type:* number

---

##### `createPublicIp`<sup>Required</sup> <a name="createPublicIp" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.createPublicIp"></a>

```typescript
public readonly createPublicIp: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataPlaneRouting`<sup>Required</sup> <a name="dataPlaneRouting" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.dataPlaneRouting"></a>

```typescript
public readonly dataPlaneRouting: string;
```

- *Type:* string

---

##### `defaultLargeStagingDiskType`<sup>Required</sup> <a name="defaultLargeStagingDiskType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.defaultLargeStagingDiskType"></a>

```typescript
public readonly defaultLargeStagingDiskType: string;
```

- *Type:* string

---

##### `ebsEncryption`<sup>Required</sup> <a name="ebsEncryption" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryption"></a>

```typescript
public readonly ebsEncryption: string;
```

- *Type:* string

---

##### `ebsEncryptionKeyArn`<sup>Required</sup> <a name="ebsEncryptionKeyArn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.ebsEncryptionKeyArn"></a>

```typescript
public readonly ebsEncryptionKeyArn: string;
```

- *Type:* string

---

##### `internetProtocol`<sup>Required</sup> <a name="internetProtocol" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.internetProtocol"></a>

```typescript
public readonly internetProtocol: string;
```

- *Type:* string

---

##### `pitPolicy`<sup>Required</sup> <a name="pitPolicy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.pitPolicy"></a>

```typescript
public readonly pitPolicy: DataAwsccDrsReplicationConfigurationTemplatePitPolicyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList">DataAwsccDrsReplicationConfigurationTemplatePitPolicyList</a>

---

##### `replicationConfigurationTemplateId`<sup>Required</sup> <a name="replicationConfigurationTemplateId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationConfigurationTemplateId"></a>

```typescript
public readonly replicationConfigurationTemplateId: string;
```

- *Type:* string

---

##### `replicationServerInstanceType`<sup>Required</sup> <a name="replicationServerInstanceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServerInstanceType"></a>

```typescript
public readonly replicationServerInstanceType: string;
```

- *Type:* string

---

##### `replicationServersSecurityGroupsIDs`<sup>Required</sup> <a name="replicationServersSecurityGroupsIDs" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.replicationServersSecurityGroupsIDs"></a>

```typescript
public readonly replicationServersSecurityGroupsIDs: string[];
```

- *Type:* string[]

---

##### `stagingAreaSubnetId`<sup>Required</sup> <a name="stagingAreaSubnetId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaSubnetId"></a>

```typescript
public readonly stagingAreaSubnetId: string;
```

- *Type:* string

---

##### `stagingAreaTags`<sup>Required</sup> <a name="stagingAreaTags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.stagingAreaTags"></a>

```typescript
public readonly stagingAreaTags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tags"></a>

```typescript
public readonly tags: DataAwsccDrsReplicationConfigurationTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList">DataAwsccDrsReplicationConfigurationTemplateTagsList</a>

---

##### `useDedicatedReplicationServer`<sup>Required</sup> <a name="useDedicatedReplicationServer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.useDedicatedReplicationServer"></a>

```typescript
public readonly useDedicatedReplicationServer: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDrsReplicationConfigurationTemplateConfig <a name="DataAwsccDrsReplicationConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccDrsReplicationConfigurationTemplateConfig: dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/data-sources/drs_replication_configuration_template#id DataAwsccDrsReplicationConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDrsReplicationConfigurationTemplatePitPolicy <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicy" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccDrsReplicationConfigurationTemplatePitPolicy: dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy = { ... }
```


### DataAwsccDrsReplicationConfigurationTemplateTags <a name="DataAwsccDrsReplicationConfigurationTemplateTags" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccDrsReplicationConfigurationTemplateTags: dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDrsReplicationConfigurationTemplatePitPolicyList <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get"></a>

```typescript
public get(index: number): DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration">retentionDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId">ruleId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `retentionDuration`<sup>Required</sup> <a name="retentionDuration" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.retentionDuration"></a>

```typescript
public readonly retentionDuration: number;
```

- *Type:* number

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: number;
```

- *Type:* number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDrsReplicationConfigurationTemplatePitPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplatePitPolicy">DataAwsccDrsReplicationConfigurationTemplatePitPolicy</a>

---


### DataAwsccDrsReplicationConfigurationTemplateTagsList <a name="DataAwsccDrsReplicationConfigurationTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get"></a>

```typescript
public get(index: number): DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference <a name="DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccDrsReplicationConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccDrsReplicationConfigurationTemplateTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDrsReplicationConfigurationTemplate.DataAwsccDrsReplicationConfigurationTemplateTags">DataAwsccDrsReplicationConfigurationTemplateTags</a>

---



