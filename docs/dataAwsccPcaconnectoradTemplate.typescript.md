# `dataAwsccPcaconnectoradTemplate` Submodule <a name="`dataAwsccPcaconnectoradTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectoradTemplate <a name="DataAwsccPcaconnectoradTemplate" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcaconnectorad_template awscc_pcaconnectorad_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate(scope: Construct, id: string, config: DataAwsccPcaconnectoradTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig">DataAwsccPcaconnectoradTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig">DataAwsccPcaconnectoradTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isConstruct"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccPcaconnectoradTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccPcaconnectoradTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccPcaconnectoradTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcaconnectorad_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectoradTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.definition">definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference">DataAwsccPcaconnectoradTemplateDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.reenrollAllCertificateHolders">reenrollAllCertificateHolders</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.templateArn">templateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.definition"></a>

```typescript
public readonly definition: DataAwsccPcaconnectoradTemplateDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference">DataAwsccPcaconnectoradTemplateDefinitionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reenrollAllCertificateHolders`<sup>Required</sup> <a name="reenrollAllCertificateHolders" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.reenrollAllCertificateHolders"></a>

```typescript
public readonly reenrollAllCertificateHolders: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectoradTemplateConfig <a name="DataAwsccPcaconnectoradTemplateConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateConfig: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/pcaconnectorad_template#id DataAwsccPcaconnectoradTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcaconnectoradTemplateDefinition <a name="DataAwsccPcaconnectoradTemplateDefinition" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinition: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2 <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2 = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3 <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3 = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4 <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4 = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags = { ... }
```


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

const dataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags: dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectoradTemplateDefinitionOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV2">templateV2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV3">templateV3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV4">templateV4</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition">DataAwsccPcaconnectoradTemplateDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateV2`<sup>Required</sup> <a name="templateV2" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV2"></a>

```typescript
public readonly templateV2: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference</a>

---

##### `templateV3`<sup>Required</sup> <a name="templateV3" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV3"></a>

```typescript
public readonly templateV3: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference</a>

---

##### `templateV4`<sup>Required</sup> <a name="templateV4" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.templateV4"></a>

```typescript
public readonly templateV4: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinition;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinition">DataAwsccPcaconnectoradTemplateDefinition</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.validityPeriod">validityPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference</a>

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.validityPeriod"></a>

```typescript
public readonly validityPeriod: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidity</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityRenewalPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityValidityPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull">enableKeyReuseOnNtTokenKeysetStorageFull</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms">includeSymmetricAlgorithms</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.noSecurityExtension">noSecurityExtension</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore">removeInvalidCertificateFromPersonalStore</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.userInteractionRequired">userInteractionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableKeyReuseOnNtTokenKeysetStorageFull`<sup>Required</sup> <a name="enableKeyReuseOnNtTokenKeysetStorageFull" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull"></a>

```typescript
public readonly enableKeyReuseOnNtTokenKeysetStorageFull: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `includeSymmetricAlgorithms`<sup>Required</sup> <a name="includeSymmetricAlgorithms" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms"></a>

```typescript
public readonly includeSymmetricAlgorithms: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `noSecurityExtension`<sup>Required</sup> <a name="noSecurityExtension" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.noSecurityExtension"></a>

```typescript
public readonly noSecurityExtension: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `removeInvalidCertificateFromPersonalStore`<sup>Required</sup> <a name="removeInvalidCertificateFromPersonalStore" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore"></a>

```typescript
public readonly removeInvalidCertificateFromPersonalStore: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `userInteractionRequired`<sup>Required</sup> <a name="userInteractionRequired" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.userInteractionRequired"></a>

```typescript
public readonly userInteractionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.critical"></a>

```typescript
public readonly critical: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.policies"></a>

```typescript
public readonly policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier">policyObjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyObjectIdentifier`<sup>Required</sup> <a name="policyObjectIdentifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier"></a>

```typescript
public readonly policyObjectIdentifier: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.usageFlags">usageFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.critical"></a>

```typescript
public readonly critical: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `usageFlags`<sup>Required</sup> <a name="usageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.usageFlags"></a>

```typescript
public readonly usageFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsage</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation">nonRepudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nonRepudiation`<sup>Required</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation"></a>

```typescript
public readonly nonRepudiation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageUsageFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.applicationPolicies">applicationPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationPolicies`<sup>Required</sup> <a name="applicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.applicationPolicies"></a>

```typescript
public readonly applicationPolicies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsApplicationPoliciesOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.keyUsage"></a>

```typescript
public readonly keyUsage: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsKeyUsageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2Extensions</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.autoEnrollment">autoEnrollment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.machineType">machineType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnrollment`<sup>Required</sup> <a name="autoEnrollment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.autoEnrollment"></a>

```typescript
public readonly autoEnrollment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.machineType"></a>

```typescript
public readonly machineType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.certificateValidity">certificateValidity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.enrollmentFlags">enrollmentFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.generalFlags">generalFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyAttributes">privateKeyAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyFlags">privateKeyFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.subjectNameFlags">subjectNameFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.supersededTemplates">supersededTemplates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateValidity`<sup>Required</sup> <a name="certificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.certificateValidity"></a>

```typescript
public readonly certificateValidity: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2CertificateValidityOutputReference</a>

---

##### `enrollmentFlags`<sup>Required</sup> <a name="enrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.enrollmentFlags"></a>

```typescript
public readonly enrollmentFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2EnrollmentFlagsOutputReference</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.extensions"></a>

```typescript
public readonly extensions: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2ExtensionsOutputReference</a>

---

##### `generalFlags`<sup>Required</sup> <a name="generalFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.generalFlags"></a>

```typescript
public readonly generalFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2GeneralFlagsOutputReference</a>

---

##### `privateKeyAttributes`<sup>Required</sup> <a name="privateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyAttributes"></a>

```typescript
public readonly privateKeyAttributes: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference</a>

---

##### `privateKeyFlags`<sup>Required</sup> <a name="privateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.privateKeyFlags"></a>

```typescript
public readonly privateKeyFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference</a>

---

##### `subjectNameFlags`<sup>Required</sup> <a name="subjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.subjectNameFlags"></a>

```typescript
public readonly subjectNameFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference</a>

---

##### `supersededTemplates`<sup>Required</sup> <a name="supersededTemplates" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.supersededTemplates"></a>

```typescript
public readonly supersededTemplates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.cryptoProviders">cryptoProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.keySpec">keySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.minimalKeyLength">minimalKeyLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cryptoProviders`<sup>Required</sup> <a name="cryptoProviders" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.cryptoProviders"></a>

```typescript
public readonly cryptoProviders: string[];
```

- *Type:* string[]

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

---

##### `minimalKeyLength`<sup>Required</sup> <a name="minimalKeyLength" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.minimalKeyLength"></a>

```typescript
public readonly minimalKeyLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyAttributes</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.exportableKey">exportableKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired">strongKeyProtectionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `exportableKey`<sup>Required</sup> <a name="exportableKey" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.exportableKey"></a>

```typescript
public readonly exportableKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `strongKeyProtectionRequired`<sup>Required</sup> <a name="strongKeyProtectionRequired" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired"></a>

```typescript
public readonly strongKeyProtectionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2PrivateKeyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireCommonName">requireCommonName</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDirectoryPath">requireDirectoryPath</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDnsAsCn">requireDnsAsCn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireEmail">requireEmail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid">sanRequireDirectoryGuid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDns">sanRequireDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDomainDns">sanRequireDomainDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireEmail">sanRequireEmail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireSpn">sanRequireSpn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireUpn">sanRequireUpn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requireCommonName`<sup>Required</sup> <a name="requireCommonName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireCommonName"></a>

```typescript
public readonly requireCommonName: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireDirectoryPath`<sup>Required</sup> <a name="requireDirectoryPath" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDirectoryPath"></a>

```typescript
public readonly requireDirectoryPath: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireDnsAsCn`<sup>Required</sup> <a name="requireDnsAsCn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireDnsAsCn"></a>

```typescript
public readonly requireDnsAsCn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireEmail`<sup>Required</sup> <a name="requireEmail" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.requireEmail"></a>

```typescript
public readonly requireEmail: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDirectoryGuid`<sup>Required</sup> <a name="sanRequireDirectoryGuid" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid"></a>

```typescript
public readonly sanRequireDirectoryGuid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDns`<sup>Required</sup> <a name="sanRequireDns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDns"></a>

```typescript
public readonly sanRequireDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDomainDns`<sup>Required</sup> <a name="sanRequireDomainDns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireDomainDns"></a>

```typescript
public readonly sanRequireDomainDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireEmail`<sup>Required</sup> <a name="sanRequireEmail" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireEmail"></a>

```typescript
public readonly sanRequireEmail: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireSpn`<sup>Required</sup> <a name="sanRequireSpn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireSpn"></a>

```typescript
public readonly sanRequireSpn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireUpn`<sup>Required</sup> <a name="sanRequireUpn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.sanRequireUpn"></a>

```typescript
public readonly sanRequireUpn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV2SubjectNameFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.validityPeriod">validityPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference</a>

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.validityPeriod"></a>

```typescript
public readonly validityPeriod: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidity</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityRenewalPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityValidityPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull">enableKeyReuseOnNtTokenKeysetStorageFull</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms">includeSymmetricAlgorithms</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.noSecurityExtension">noSecurityExtension</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore">removeInvalidCertificateFromPersonalStore</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.userInteractionRequired">userInteractionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableKeyReuseOnNtTokenKeysetStorageFull`<sup>Required</sup> <a name="enableKeyReuseOnNtTokenKeysetStorageFull" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull"></a>

```typescript
public readonly enableKeyReuseOnNtTokenKeysetStorageFull: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `includeSymmetricAlgorithms`<sup>Required</sup> <a name="includeSymmetricAlgorithms" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms"></a>

```typescript
public readonly includeSymmetricAlgorithms: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `noSecurityExtension`<sup>Required</sup> <a name="noSecurityExtension" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.noSecurityExtension"></a>

```typescript
public readonly noSecurityExtension: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `removeInvalidCertificateFromPersonalStore`<sup>Required</sup> <a name="removeInvalidCertificateFromPersonalStore" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore"></a>

```typescript
public readonly removeInvalidCertificateFromPersonalStore: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `userInteractionRequired`<sup>Required</sup> <a name="userInteractionRequired" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.userInteractionRequired"></a>

```typescript
public readonly userInteractionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.critical"></a>

```typescript
public readonly critical: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.policies"></a>

```typescript
public readonly policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier">policyObjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyObjectIdentifier`<sup>Required</sup> <a name="policyObjectIdentifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier"></a>

```typescript
public readonly policyObjectIdentifier: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.usageFlags">usageFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.critical"></a>

```typescript
public readonly critical: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `usageFlags`<sup>Required</sup> <a name="usageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.usageFlags"></a>

```typescript
public readonly usageFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsage</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation">nonRepudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nonRepudiation`<sup>Required</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation"></a>

```typescript
public readonly nonRepudiation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageUsageFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.applicationPolicies">applicationPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationPolicies`<sup>Required</sup> <a name="applicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.applicationPolicies"></a>

```typescript
public readonly applicationPolicies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsApplicationPoliciesOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.keyUsage"></a>

```typescript
public readonly keyUsage: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsKeyUsageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3Extensions</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.autoEnrollment">autoEnrollment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.machineType">machineType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnrollment`<sup>Required</sup> <a name="autoEnrollment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.autoEnrollment"></a>

```typescript
public readonly autoEnrollment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.machineType"></a>

```typescript
public readonly machineType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.certificateValidity">certificateValidity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.enrollmentFlags">enrollmentFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.generalFlags">generalFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyAttributes">privateKeyAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyFlags">privateKeyFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.subjectNameFlags">subjectNameFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.supersededTemplates">supersededTemplates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateValidity`<sup>Required</sup> <a name="certificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.certificateValidity"></a>

```typescript
public readonly certificateValidity: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3CertificateValidityOutputReference</a>

---

##### `enrollmentFlags`<sup>Required</sup> <a name="enrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.enrollmentFlags"></a>

```typescript
public readonly enrollmentFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3EnrollmentFlagsOutputReference</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.extensions"></a>

```typescript
public readonly extensions: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3ExtensionsOutputReference</a>

---

##### `generalFlags`<sup>Required</sup> <a name="generalFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.generalFlags"></a>

```typescript
public readonly generalFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3GeneralFlagsOutputReference</a>

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

---

##### `privateKeyAttributes`<sup>Required</sup> <a name="privateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyAttributes"></a>

```typescript
public readonly privateKeyAttributes: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference</a>

---

##### `privateKeyFlags`<sup>Required</sup> <a name="privateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.privateKeyFlags"></a>

```typescript
public readonly privateKeyFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference</a>

---

##### `subjectNameFlags`<sup>Required</sup> <a name="subjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.subjectNameFlags"></a>

```typescript
public readonly subjectNameFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference</a>

---

##### `supersededTemplates`<sup>Required</sup> <a name="supersededTemplates" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.supersededTemplates"></a>

```typescript
public readonly supersededTemplates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags">propertyFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType">propertyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertyFlags`<sup>Required</sup> <a name="propertyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags"></a>

```typescript
public readonly propertyFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a>

---

##### `propertyType`<sup>Required</sup> <a name="propertyType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType"></a>

```typescript
public readonly propertyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsageProperty</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt">decrypt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign">sign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `decrypt`<sup>Required</sup> <a name="decrypt" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt"></a>

```typescript
public readonly decrypt: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sign`<sup>Required</sup> <a name="sign" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign"></a>

```typescript
public readonly sign: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.cryptoProviders">cryptoProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keySpec">keySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keyUsageProperty">keyUsageProperty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.minimalKeyLength">minimalKeyLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `cryptoProviders`<sup>Required</sup> <a name="cryptoProviders" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.cryptoProviders"></a>

```typescript
public readonly cryptoProviders: string[];
```

- *Type:* string[]

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

---

##### `keyUsageProperty`<sup>Required</sup> <a name="keyUsageProperty" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.keyUsageProperty"></a>

```typescript
public readonly keyUsageProperty: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesKeyUsagePropertyOutputReference</a>

---

##### `minimalKeyLength`<sup>Required</sup> <a name="minimalKeyLength" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.minimalKeyLength"></a>

```typescript
public readonly minimalKeyLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyAttributes</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.exportableKey">exportableKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm">requireAlternateSignatureAlgorithm</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired">strongKeyProtectionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `exportableKey`<sup>Required</sup> <a name="exportableKey" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.exportableKey"></a>

```typescript
public readonly exportableKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireAlternateSignatureAlgorithm`<sup>Required</sup> <a name="requireAlternateSignatureAlgorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm"></a>

```typescript
public readonly requireAlternateSignatureAlgorithm: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `strongKeyProtectionRequired`<sup>Required</sup> <a name="strongKeyProtectionRequired" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired"></a>

```typescript
public readonly strongKeyProtectionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3PrivateKeyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireCommonName">requireCommonName</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDirectoryPath">requireDirectoryPath</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDnsAsCn">requireDnsAsCn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireEmail">requireEmail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid">sanRequireDirectoryGuid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDns">sanRequireDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDomainDns">sanRequireDomainDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireEmail">sanRequireEmail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireSpn">sanRequireSpn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireUpn">sanRequireUpn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requireCommonName`<sup>Required</sup> <a name="requireCommonName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireCommonName"></a>

```typescript
public readonly requireCommonName: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireDirectoryPath`<sup>Required</sup> <a name="requireDirectoryPath" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDirectoryPath"></a>

```typescript
public readonly requireDirectoryPath: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireDnsAsCn`<sup>Required</sup> <a name="requireDnsAsCn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireDnsAsCn"></a>

```typescript
public readonly requireDnsAsCn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireEmail`<sup>Required</sup> <a name="requireEmail" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.requireEmail"></a>

```typescript
public readonly requireEmail: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDirectoryGuid`<sup>Required</sup> <a name="sanRequireDirectoryGuid" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid"></a>

```typescript
public readonly sanRequireDirectoryGuid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDns`<sup>Required</sup> <a name="sanRequireDns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDns"></a>

```typescript
public readonly sanRequireDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDomainDns`<sup>Required</sup> <a name="sanRequireDomainDns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireDomainDns"></a>

```typescript
public readonly sanRequireDomainDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireEmail`<sup>Required</sup> <a name="sanRequireEmail" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireEmail"></a>

```typescript
public readonly sanRequireEmail: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireSpn`<sup>Required</sup> <a name="sanRequireSpn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireSpn"></a>

```typescript
public readonly sanRequireSpn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireUpn`<sup>Required</sup> <a name="sanRequireUpn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.sanRequireUpn"></a>

```typescript
public readonly sanRequireUpn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV3SubjectNameFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.validityPeriod">validityPeriod</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference</a>

---

##### `validityPeriod`<sup>Required</sup> <a name="validityPeriod" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.validityPeriod"></a>

```typescript
public readonly validityPeriod: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidity</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityRenewalPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.periodType">periodType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `periodType`<sup>Required</sup> <a name="periodType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.periodType"></a>

```typescript
public readonly periodType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriodOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityValidityPeriod</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull">enableKeyReuseOnNtTokenKeysetStorageFull</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms">includeSymmetricAlgorithms</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.noSecurityExtension">noSecurityExtension</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore">removeInvalidCertificateFromPersonalStore</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.userInteractionRequired">userInteractionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableKeyReuseOnNtTokenKeysetStorageFull`<sup>Required</sup> <a name="enableKeyReuseOnNtTokenKeysetStorageFull" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.enableKeyReuseOnNtTokenKeysetStorageFull"></a>

```typescript
public readonly enableKeyReuseOnNtTokenKeysetStorageFull: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `includeSymmetricAlgorithms`<sup>Required</sup> <a name="includeSymmetricAlgorithms" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.includeSymmetricAlgorithms"></a>

```typescript
public readonly includeSymmetricAlgorithms: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `noSecurityExtension`<sup>Required</sup> <a name="noSecurityExtension" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.noSecurityExtension"></a>

```typescript
public readonly noSecurityExtension: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `removeInvalidCertificateFromPersonalStore`<sup>Required</sup> <a name="removeInvalidCertificateFromPersonalStore" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.removeInvalidCertificateFromPersonalStore"></a>

```typescript
public readonly removeInvalidCertificateFromPersonalStore: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `userInteractionRequired`<sup>Required</sup> <a name="userInteractionRequired" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.userInteractionRequired"></a>

```typescript
public readonly userInteractionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.critical"></a>

```typescript
public readonly critical: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.policies"></a>

```typescript
public readonly policies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier">policyObjectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyObjectIdentifier`<sup>Required</sup> <a name="policyObjectIdentifier" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyObjectIdentifier"></a>

```typescript
public readonly policyObjectIdentifier: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesPolicies</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.critical">critical</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.usageFlags">usageFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.critical"></a>

```typescript
public readonly critical: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `usageFlags`<sup>Required</sup> <a name="usageFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.usageFlags"></a>

```typescript
public readonly usageFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsage</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation">nonRepudiation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.dataEncipherment"></a>

```typescript
public readonly dataEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.digitalSignature"></a>

```typescript
public readonly digitalSignature: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.keyEncipherment"></a>

```typescript
public readonly keyEncipherment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nonRepudiation`<sup>Required</sup> <a name="nonRepudiation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.nonRepudiation"></a>

```typescript
public readonly nonRepudiation: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageUsageFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.applicationPolicies">applicationPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationPolicies`<sup>Required</sup> <a name="applicationPolicies" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.applicationPolicies"></a>

```typescript
public readonly applicationPolicies: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsApplicationPoliciesOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.keyUsage"></a>

```typescript
public readonly keyUsage: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsKeyUsageOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4Extensions</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.autoEnrollment">autoEnrollment</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.machineType">machineType</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnrollment`<sup>Required</sup> <a name="autoEnrollment" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.autoEnrollment"></a>

```typescript
public readonly autoEnrollment: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.machineType"></a>

```typescript
public readonly machineType: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.certificateValidity">certificateValidity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.enrollmentFlags">enrollmentFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.generalFlags">generalFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.hashAlgorithm">hashAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyAttributes">privateKeyAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyFlags">privateKeyFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.subjectNameFlags">subjectNameFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.supersededTemplates">supersededTemplates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateValidity`<sup>Required</sup> <a name="certificateValidity" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.certificateValidity"></a>

```typescript
public readonly certificateValidity: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4CertificateValidityOutputReference</a>

---

##### `enrollmentFlags`<sup>Required</sup> <a name="enrollmentFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.enrollmentFlags"></a>

```typescript
public readonly enrollmentFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4EnrollmentFlagsOutputReference</a>

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.extensions"></a>

```typescript
public readonly extensions: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4ExtensionsOutputReference</a>

---

##### `generalFlags`<sup>Required</sup> <a name="generalFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.generalFlags"></a>

```typescript
public readonly generalFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4GeneralFlagsOutputReference</a>

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.hashAlgorithm"></a>

```typescript
public readonly hashAlgorithm: string;
```

- *Type:* string

---

##### `privateKeyAttributes`<sup>Required</sup> <a name="privateKeyAttributes" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyAttributes"></a>

```typescript
public readonly privateKeyAttributes: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference</a>

---

##### `privateKeyFlags`<sup>Required</sup> <a name="privateKeyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.privateKeyFlags"></a>

```typescript
public readonly privateKeyFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference</a>

---

##### `subjectNameFlags`<sup>Required</sup> <a name="subjectNameFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.subjectNameFlags"></a>

```typescript
public readonly subjectNameFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference</a>

---

##### `supersededTemplates`<sup>Required</sup> <a name="supersededTemplates" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.supersededTemplates"></a>

```typescript
public readonly supersededTemplates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags">propertyFlags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType">propertyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `propertyFlags`<sup>Required</sup> <a name="propertyFlags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyFlags"></a>

```typescript
public readonly propertyFlags: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference</a>

---

##### `propertyType`<sup>Required</sup> <a name="propertyType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.propertyType"></a>

```typescript
public readonly propertyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsageProperty</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt">decrypt</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign">sign</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `decrypt`<sup>Required</sup> <a name="decrypt" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.decrypt"></a>

```typescript
public readonly decrypt: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.keyAgreement"></a>

```typescript
public readonly keyAgreement: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sign`<sup>Required</sup> <a name="sign" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.sign"></a>

```typescript
public readonly sign: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyPropertyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.cryptoProviders">cryptoProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keySpec">keySpec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keyUsageProperty">keyUsageProperty</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.minimalKeyLength">minimalKeyLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `cryptoProviders`<sup>Required</sup> <a name="cryptoProviders" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.cryptoProviders"></a>

```typescript
public readonly cryptoProviders: string[];
```

- *Type:* string[]

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keySpec"></a>

```typescript
public readonly keySpec: string;
```

- *Type:* string

---

##### `keyUsageProperty`<sup>Required</sup> <a name="keyUsageProperty" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.keyUsageProperty"></a>

```typescript
public readonly keyUsageProperty: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesKeyUsagePropertyOutputReference</a>

---

##### `minimalKeyLength`<sup>Required</sup> <a name="minimalKeyLength" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.minimalKeyLength"></a>

```typescript
public readonly minimalKeyLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyAttributes</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.clientVersion">clientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.exportableKey">exportableKey</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm">requireAlternateSignatureAlgorithm</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireSameKeyRenewal">requireSameKeyRenewal</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired">strongKeyProtectionRequired</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.useLegacyProvider">useLegacyProvider</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientVersion`<sup>Required</sup> <a name="clientVersion" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.clientVersion"></a>

```typescript
public readonly clientVersion: string;
```

- *Type:* string

---

##### `exportableKey`<sup>Required</sup> <a name="exportableKey" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.exportableKey"></a>

```typescript
public readonly exportableKey: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireAlternateSignatureAlgorithm`<sup>Required</sup> <a name="requireAlternateSignatureAlgorithm" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireAlternateSignatureAlgorithm"></a>

```typescript
public readonly requireAlternateSignatureAlgorithm: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireSameKeyRenewal`<sup>Required</sup> <a name="requireSameKeyRenewal" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.requireSameKeyRenewal"></a>

```typescript
public readonly requireSameKeyRenewal: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `strongKeyProtectionRequired`<sup>Required</sup> <a name="strongKeyProtectionRequired" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.strongKeyProtectionRequired"></a>

```typescript
public readonly strongKeyProtectionRequired: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `useLegacyProvider`<sup>Required</sup> <a name="useLegacyProvider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.useLegacyProvider"></a>

```typescript
public readonly useLegacyProvider: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4PrivateKeyFlags</a>

---


### DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference <a name="DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccPcaconnectoradTemplate } from '@cdktn/provider-awscc'

new dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireCommonName">requireCommonName</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDirectoryPath">requireDirectoryPath</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDnsAsCn">requireDnsAsCn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireEmail">requireEmail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid">sanRequireDirectoryGuid</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDns">sanRequireDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDomainDns">sanRequireDomainDns</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireEmail">sanRequireEmail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireSpn">sanRequireSpn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireUpn">sanRequireUpn</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `requireCommonName`<sup>Required</sup> <a name="requireCommonName" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireCommonName"></a>

```typescript
public readonly requireCommonName: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireDirectoryPath`<sup>Required</sup> <a name="requireDirectoryPath" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDirectoryPath"></a>

```typescript
public readonly requireDirectoryPath: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireDnsAsCn`<sup>Required</sup> <a name="requireDnsAsCn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireDnsAsCn"></a>

```typescript
public readonly requireDnsAsCn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `requireEmail`<sup>Required</sup> <a name="requireEmail" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.requireEmail"></a>

```typescript
public readonly requireEmail: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDirectoryGuid`<sup>Required</sup> <a name="sanRequireDirectoryGuid" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDirectoryGuid"></a>

```typescript
public readonly sanRequireDirectoryGuid: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDns`<sup>Required</sup> <a name="sanRequireDns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDns"></a>

```typescript
public readonly sanRequireDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireDomainDns`<sup>Required</sup> <a name="sanRequireDomainDns" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireDomainDns"></a>

```typescript
public readonly sanRequireDomainDns: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireEmail`<sup>Required</sup> <a name="sanRequireEmail" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireEmail"></a>

```typescript
public readonly sanRequireEmail: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireSpn`<sup>Required</sup> <a name="sanRequireSpn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireSpn"></a>

```typescript
public readonly sanRequireSpn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `sanRequireUpn`<sup>Required</sup> <a name="sanRequireUpn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.sanRequireUpn"></a>

```typescript
public readonly sanRequireUpn: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradTemplate.DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags">DataAwsccPcaconnectoradTemplateDefinitionTemplateV4SubjectNameFlags</a>

---



