# `dataAwsccElasticbeanstalkConfigurationTemplate` Submodule <a name="`dataAwsccElasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticbeanstalkConfigurationTemplate <a name="DataAwsccElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate(scope: Construct, id: string, config: DataAwsccElasticbeanstalkConfigurationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig">DataAwsccElasticbeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig">DataAwsccElasticbeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticbeanstalkConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.optionSettings">optionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.platformArn">platformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">sourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `optionSettings`<sup>Required</sup> <a name="optionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```typescript
public readonly optionSettings: DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `platformArn`<sup>Required</sup> <a name="platformArn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```typescript
public readonly platformArn: string;
```

- *Type:* string

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

---

##### `sourceConfiguration`<sup>Required</sup> <a name="sourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```typescript
public readonly sourceConfiguration: DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticbeanstalkConfigurationTemplateConfig <a name="DataAwsccElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccElasticbeanstalkConfigurationTemplateConfig: dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/elasticbeanstalk_configuration_template#id DataAwsccElasticbeanstalkConfigurationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccElasticbeanstalkConfigurationTemplateOptionSettings: dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings = { ... }
```


### DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

const dataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration: dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">optionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `optionName`<sup>Required</sup> <a name="optionName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```typescript
public readonly optionName: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings">DataAwsccElasticbeanstalkConfigurationTemplateOptionSettings</a>

---


### DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkConfigurationTemplate } from '@cdktn/provider-awscc'

new dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkConfigurationTemplate.DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration">DataAwsccElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---



