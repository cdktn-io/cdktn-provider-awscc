# `dataAwsccSesMailManagerIngressPoint` Submodule <a name="`dataAwsccSesMailManagerIngressPoint` Submodule" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesMailManagerIngressPoint <a name="DataAwsccSesMailManagerIngressPoint" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_mail_manager_ingress_point awscc_ses_mail_manager_ingress_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint(scope: Construct, id: string, config: DataAwsccSesMailManagerIngressPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig">DataAwsccSesMailManagerIngressPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig">DataAwsccSesMailManagerIngressPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isConstruct"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformElement"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.generateConfigForImport"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccSesMailManagerIngressPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSesMailManagerIngressPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSesMailManagerIngressPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_mail_manager_ingress_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesMailManagerIngressPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.aRecord">aRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointArn">ingressPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference">DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointId">ingressPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointName">ingressPointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference">DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ruleSetId">ruleSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.statusToUpdate">statusToUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList">DataAwsccSesMailManagerIngressPointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.tlsPolicy">tlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.trafficPolicyId">trafficPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `aRecord`<sup>Required</sup> <a name="aRecord" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.aRecord"></a>

```typescript
public readonly aRecord: string;
```

- *Type:* string

---

##### `ingressPointArn`<sup>Required</sup> <a name="ingressPointArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointArn"></a>

```typescript
public readonly ingressPointArn: string;
```

- *Type:* string

---

##### `ingressPointConfiguration`<sup>Required</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointConfiguration"></a>

```typescript
public readonly ingressPointConfiguration: DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference">DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference</a>

---

##### `ingressPointId`<sup>Required</sup> <a name="ingressPointId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointId"></a>

```typescript
public readonly ingressPointId: string;
```

- *Type:* string

---

##### `ingressPointName`<sup>Required</sup> <a name="ingressPointName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ingressPointName"></a>

```typescript
public readonly ingressPointName: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference">DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference</a>

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.ruleSetId"></a>

```typescript
public readonly ruleSetId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusToUpdate`<sup>Required</sup> <a name="statusToUpdate" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.statusToUpdate"></a>

```typescript
public readonly statusToUpdate: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccSesMailManagerIngressPointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList">DataAwsccSesMailManagerIngressPointTagsList</a>

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.tlsPolicy"></a>

```typescript
public readonly tlsPolicy: string;
```

- *Type:* string

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.trafficPolicyId"></a>

```typescript
public readonly trafficPolicyId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesMailManagerIngressPointConfig <a name="DataAwsccSesMailManagerIngressPointConfig" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointConfig: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ses_mail_manager_ingress_point#id DataAwsccSesMailManagerIngressPoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesMailManagerIngressPointIngressPointConfiguration <a name="DataAwsccSesMailManagerIngressPointIngressPointConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfiguration.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointIngressPointConfiguration: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfiguration = { ... }
```


### DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration <a name="DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration = { ... }
```


### DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore <a name="DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore = { ... }
```


### DataAwsccSesMailManagerIngressPointNetworkConfiguration <a name="DataAwsccSesMailManagerIngressPointNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointNetworkConfiguration: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfiguration = { ... }
```


### DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration <a name="DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration = { ... }
```


### DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration <a name="DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration = { ... }
```


### DataAwsccSesMailManagerIngressPointTags <a name="DataAwsccSesMailManagerIngressPointTags" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTags.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

const dataAwsccSesMailManagerIngressPointTags: dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference <a name="DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword">smtpPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration">tlsAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfiguration">DataAwsccSesMailManagerIngressPointIngressPointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `smtpPassword`<sup>Required</sup> <a name="smtpPassword" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.smtpPassword"></a>

```typescript
public readonly smtpPassword: string;
```

- *Type:* string

---

##### `tlsAuthConfiguration`<sup>Required</sup> <a name="tlsAuthConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration"></a>

```typescript
public readonly tlsAuthConfiguration: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerIngressPointIngressPointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfiguration">DataAwsccSesMailManagerIngressPointIngressPointConfiguration</a>

---


### DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference <a name="DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore">trustStore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore"></a>

```typescript
public readonly trustStore: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---


### DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference <a name="DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent">caContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent">crlContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caContent`<sup>Required</sup> <a name="caContent" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent"></a>

```typescript
public readonly caContent: string;
```

- *Type:* string

---

##### `crlContent`<sup>Required</sup> <a name="crlContent" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent"></a>

```typescript
public readonly crlContent: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">DataAwsccSesMailManagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---


### DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference <a name="DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration">privateNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration">publicNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfiguration">DataAwsccSesMailManagerIngressPointNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateNetworkConfiguration`<sup>Required</sup> <a name="privateNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration"></a>

```typescript
public readonly privateNetworkConfiguration: DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference">DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference</a>

---

##### `publicNetworkConfiguration`<sup>Required</sup> <a name="publicNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration"></a>

```typescript
public readonly publicNetworkConfiguration: DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference">DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerIngressPointNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfiguration">DataAwsccSesMailManagerIngressPointNetworkConfiguration</a>

---


### DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference <a name="DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">DataAwsccSesMailManagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---


### DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference <a name="DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType">ipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType"></a>

```typescript
public readonly ipType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration">DataAwsccSesMailManagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---


### DataAwsccSesMailManagerIngressPointTagsList <a name="DataAwsccSesMailManagerIngressPointTagsList" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccSesMailManagerIngressPointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccSesMailManagerIngressPointTagsOutputReference <a name="DataAwsccSesMailManagerIngressPointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccSesMailManagerIngressPoint } from '@cdktn/provider-awscc'

new dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTags">DataAwsccSesMailManagerIngressPointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccSesMailManagerIngressPointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesMailManagerIngressPoint.DataAwsccSesMailManagerIngressPointTags">DataAwsccSesMailManagerIngressPointTags</a>

---



