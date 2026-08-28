# `dataAwsccMedialiveCloudwatchAlarmTemplate` Submodule <a name="`dataAwsccMedialiveCloudwatchAlarmTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMedialiveCloudwatchAlarmTemplate <a name="DataAwsccMedialiveCloudwatchAlarmTemplate" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer"></a>

```typescript
import { dataAwsccMedialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

new dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate(scope: Construct, id: string, config: DataAwsccMedialiveCloudwatchAlarmTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig">DataAwsccMedialiveCloudwatchAlarmTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig">DataAwsccMedialiveCloudwatchAlarmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isConstruct"></a>

```typescript
import { dataAwsccMedialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccMedialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccMedialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccMedialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccMedialiveCloudwatchAlarmTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMedialiveCloudwatchAlarmTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMedialiveCloudwatchAlarmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMedialiveCloudwatchAlarmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId">cloudwatchAlarmTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm">datapointsToAlarm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.evaluationPeriods">evaluationPeriods</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.modifiedAt">modifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.statistic">statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.targetResourceType">targetResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.treatMissingData">treatMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchAlarmTemplateId`<sup>Required</sup> <a name="cloudwatchAlarmTemplateId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.cloudwatchAlarmTemplateId"></a>

```typescript
public readonly cloudwatchAlarmTemplateId: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `datapointsToAlarm`<sup>Required</sup> <a name="datapointsToAlarm" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.datapointsToAlarm"></a>

```typescript
public readonly datapointsToAlarm: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `evaluationPeriods`<sup>Required</sup> <a name="evaluationPeriods" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.evaluationPeriods"></a>

```typescript
public readonly evaluationPeriods: number;
```

- *Type:* number

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.modifiedAt"></a>

```typescript
public readonly modifiedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.statistic"></a>

```typescript
public readonly statistic: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.targetResourceType"></a>

```typescript
public readonly targetResourceType: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `treatMissingData`<sup>Required</sup> <a name="treatMissingData" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.treatMissingData"></a>

```typescript
public readonly treatMissingData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMedialiveCloudwatchAlarmTemplateConfig <a name="DataAwsccMedialiveCloudwatchAlarmTemplateConfig" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccMedialiveCloudwatchAlarmTemplate } from '@cdktn/provider-awscc'

const dataAwsccMedialiveCloudwatchAlarmTemplateConfig: dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccMedialiveCloudwatchAlarmTemplate.DataAwsccMedialiveCloudwatchAlarmTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/medialive_cloudwatch_alarm_template#id DataAwsccMedialiveCloudwatchAlarmTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



