# `dataAwsccElasticbeanstalkApplicationVersion` Submodule <a name="`dataAwsccElasticbeanstalkApplicationVersion` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticbeanstalkApplicationVersion <a name="DataAwsccElasticbeanstalkApplicationVersion" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion(scope: Construct, id: string, config: DataAwsccElasticbeanstalkApplicationVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig">DataAwsccElasticbeanstalkApplicationVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig">DataAwsccElasticbeanstalkApplicationVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isConstruct"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformElement"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticbeanstalkApplicationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticbeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticbeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationName">applicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationVersionId">applicationVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.sourceBundle">sourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference">DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

---

##### `applicationVersionId`<sup>Required</sup> <a name="applicationVersionId" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.applicationVersionId"></a>

```typescript
public readonly applicationVersionId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `sourceBundle`<sup>Required</sup> <a name="sourceBundle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.sourceBundle"></a>

```typescript
public readonly sourceBundle: DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference">DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticbeanstalkApplicationVersionConfig <a name="DataAwsccElasticbeanstalkApplicationVersionConfig" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const dataAwsccElasticbeanstalkApplicationVersionConfig: dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/elasticbeanstalk_application_version#id DataAwsccElasticbeanstalkApplicationVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticbeanstalkApplicationVersionSourceBundle <a name="DataAwsccElasticbeanstalkApplicationVersionSourceBundle" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

const dataAwsccElasticbeanstalkApplicationVersionSourceBundle: dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference <a name="DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticbeanstalkApplicationVersion } from '@cdktn/provider-awscc'

new dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle">DataAwsccElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticbeanstalkApplicationVersionSourceBundle;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticbeanstalkApplicationVersion.DataAwsccElasticbeanstalkApplicationVersionSourceBundle">DataAwsccElasticbeanstalkApplicationVersionSourceBundle</a>

---



