# `dataAwsccCloudformationGeneratedTemplate` Submodule <a name="`dataAwsccCloudformationGeneratedTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudformationGeneratedTemplate <a name="DataAwsccCloudformationGeneratedTemplate" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_generated_template awscc_cloudformation_generated_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate(scope: Construct, id: string, config: DataAwsccCloudformationGeneratedTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig">DataAwsccCloudformationGeneratedTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig">DataAwsccCloudformationGeneratedTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isConstruct"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudformationGeneratedTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudformationGeneratedTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudformationGeneratedTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_generated_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudformationGeneratedTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateId">generatedTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateName">generatedTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.progress">progress</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference">DataAwsccCloudformationGeneratedTemplateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.templateConfiguration">templateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference">DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.totalWarnings">totalWarnings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `generatedTemplateId`<sup>Required</sup> <a name="generatedTemplateId" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateId"></a>

```typescript
public readonly generatedTemplateId: string;
```

- *Type:* string

---

##### `generatedTemplateName`<sup>Required</sup> <a name="generatedTemplateName" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.generatedTemplateName"></a>

```typescript
public readonly generatedTemplateName: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.progress"></a>

```typescript
public readonly progress: DataAwsccCloudformationGeneratedTemplateProgressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference">DataAwsccCloudformationGeneratedTemplateProgressOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `templateConfiguration`<sup>Required</sup> <a name="templateConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.templateConfiguration"></a>

```typescript
public readonly templateConfiguration: DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference">DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference</a>

---

##### `totalWarnings`<sup>Required</sup> <a name="totalWarnings" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.totalWarnings"></a>

```typescript
public readonly totalWarnings: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudformationGeneratedTemplateConfig <a name="DataAwsccCloudformationGeneratedTemplateConfig" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGeneratedTemplateConfig: dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudformation_generated_template#id DataAwsccCloudformationGeneratedTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudformationGeneratedTemplateProgress <a name="DataAwsccCloudformationGeneratedTemplateProgress" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress.Initializer"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGeneratedTemplateProgress: dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress = { ... }
```


### DataAwsccCloudformationGeneratedTemplateTemplateConfiguration <a name="DataAwsccCloudformationGeneratedTemplateTemplateConfiguration" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration.Initializer"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

const dataAwsccCloudformationGeneratedTemplateTemplateConfiguration: dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudformationGeneratedTemplateProgressOutputReference <a name="DataAwsccCloudformationGeneratedTemplateProgressOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed">resourcesFailed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending">resourcesPending</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing">resourcesProcessing</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded">resourcesSucceeded</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress">DataAwsccCloudformationGeneratedTemplateProgress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourcesFailed`<sup>Required</sup> <a name="resourcesFailed" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesFailed"></a>

```typescript
public readonly resourcesFailed: number;
```

- *Type:* number

---

##### `resourcesPending`<sup>Required</sup> <a name="resourcesPending" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesPending"></a>

```typescript
public readonly resourcesPending: number;
```

- *Type:* number

---

##### `resourcesProcessing`<sup>Required</sup> <a name="resourcesProcessing" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesProcessing"></a>

```typescript
public readonly resourcesProcessing: number;
```

- *Type:* number

---

##### `resourcesSucceeded`<sup>Required</sup> <a name="resourcesSucceeded" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.resourcesSucceeded"></a>

```typescript
public readonly resourcesSucceeded: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGeneratedTemplateProgress;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateProgress">DataAwsccCloudformationGeneratedTemplateProgress</a>

---


### DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference <a name="DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudformationGeneratedTemplate } from '@cdktn/provider-awscc'

new dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy">updateReplacePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration">DataAwsccCloudformationGeneratedTemplateTemplateConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `updateReplacePolicy`<sup>Required</sup> <a name="updateReplacePolicy" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.updateReplacePolicy"></a>

```typescript
public readonly updateReplacePolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudformationGeneratedTemplateTemplateConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudformationGeneratedTemplate.DataAwsccCloudformationGeneratedTemplateTemplateConfiguration">DataAwsccCloudformationGeneratedTemplateTemplateConfiguration</a>

---



